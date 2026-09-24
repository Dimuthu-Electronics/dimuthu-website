# WhatsApp Invoice Bot — setup

Send a job to the bot on WhatsApp, get the shop's invoice PDF back in the same
chat, forward it to the customer. No app, no laptop, no paper bill.

The bot lives at `dimuthuelectronics.com/api/whatsapp`, inside this website. It
deploys with everything else when you push to `main` — there is no separate
server to run or pay for. Nothing is stored: the PDF is built in memory, sent,
and forgotten.

---

## 1. How it works

```
You (WhatsApp)  ──►  Meta  ──►  dimuthuelectronics.com/api/whatsapp
                                        │
                                        │  builds the PDF
                                        ▼
You (WhatsApp)  ◄──  Meta  ◄──  invoice.pdf
        │
        └──►  forward to the customer
```

The invoice is rendered from `src/components/InvoicePDF.tsx`, which is a copy of
the desktop app's template — so a bill sent over WhatsApp looks exactly like one
made in the shop.

Bot invoices carry **no invoice number**. The numbered sequence stays with the
paper book and the desktop app; a one-off final bill sent from a phone stays out
of it rather than punching holes in the run.

---

## 2. Who can use it

Three locks, all on by default:

1. **Meta's signature** — every request must carry a valid `X-Hub-Signature-256`
   computed with your App Secret. Anything else gets a `403` before any invoice
   code runs.
2. **Sender allow-list** — only the numbers in `WHATSAPP_ALLOWED_SENDERS` are
   answered. Everyone else is ignored silently. An empty list blocks everyone.
3. **Replies go back to the sender only** — the bot cannot be made to send a PDF
   anywhere else.

---

## 3. Meta setup (about 30 minutes, free, once)

1. Go to **developers.facebook.com** → **My Apps** → **Create App** → choose
   **Business**. Name it anything, e.g. `Dimuthu Invoices`.
2. On the app dashboard, find **WhatsApp** and click **Set up**. Accept the
   business account it offers to create.
3. Open **WhatsApp → API Setup**. You now have:
   - a **test phone number** (free, provided by Meta — no SIM needed). This is
     the number you will message. Save it to your contacts as "Dimuthu Invoices".
   - a **Phone number ID** — copy it.
4. Under **To**, click **Manage phone number list** and add **your number and
   your father's**. Meta sends each a confirmation code. A test number can only
   message numbers on this list (up to 5) — which is exactly what we want.
5. Get the **App Secret**: **App settings → Basic → App Secret → Show**.
6. Get a **permanent access token**. The token shown on the API Setup page
   expires in 24 hours — the bot would stop working tomorrow. Make a system
   user token instead:
   - System users live on **business.facebook.com**, *not* on
     developers.facebook.com. Quickest route is the direct link — take the
     `business_id` from the address bar of your app list page and open
     `https://business.facebook.com/settings/system-users?business_id=<ID>`.
     Otherwise: **business.facebook.com** → **gear icon**, bottom left →
     **Users → System users**.
   - **Add** → name it `invoice-bot`, role **Admin** → Create
   - Select it → **Assign assets** → **Apps** → your app → turn on
     **Full control** → Save
   - **Assign assets** again → **WhatsApp accounts** → your WhatsApp Business
     Account → turn on **Full control** → Save. *Miss this one and the token
     will be rejected with a permissions error when it tries to send.*
   - **Generate new token** → pick your app → **Token expiration: Never** →
     tick **whatsapp_business_messaging** and **whatsapp_business_management**
     → Generate
   - Copy the token now. Meta shows it once and never again.

---

## 4. Vercel setup

In the Vercel project → **Settings → Environment Variables**, add these for
**Production**:

| Name | Value |
|---|---|
| `WHATSAPP_TOKEN` | the permanent token from step 3.6 |
| `WHATSAPP_PHONE_NUMBER_ID` | from step 3.3 |
| `WHATSAPP_APP_SECRET` | from step 3.5 |
| `WHATSAPP_VERIFY_TOKEN` | any password you invent, e.g. `dimuthu-hook-2026` |
| `WHATSAPP_ALLOWED_SENDERS` | your two numbers, comma separated: `94711114767,94764144330` |

`WHATSAPP_ALLOWED_SENDERS` is matched on the last 9 digits, so `0771234567`,
`+94 77 123 4567` and `94771234567` all work.

Then **redeploy** so the variables take effect.

---

## 5. Connect the webhook

Back on the Meta app dashboard → **WhatsApp → Configuration → Edit**:

- **Callback URL:** `https://dimuthuelectronics.com/api/whatsapp`
- **Verify token:** the same `WHATSAPP_VERIFY_TOKEN` you set in Vercel
- Click **Verify and save** — it should turn green immediately.
- Under **Webhook fields**, click **Manage** and subscribe to **messages**.

---

## 5a. Subscribe the WhatsApp account to your app

**This step has no button in the dashboard and everything looks fine without
it.** Subscribing the `messages` webhook field is not enough: the WhatsApp
Business Account itself has to be subscribed to *your* app. Out of the box it is
subscribed to Meta's own internal app ("WA DevX Webhook Events 1P App"), so
messages you send are delivered to Meta's test viewer and your webhook is never
called. The symptom is maddening — two grey ticks in WhatsApp, a green webhook,
Meta's "Send to server" test arriving fine, and zero POSTs in the Vercel logs.

Check it by pasting this into the browser address bar, with your WhatsApp
Business account ID and an access token from the API Setup page:

```
https://graph.facebook.com/v22.0/<WABA_ID>/subscribed_apps?access_token=<TOKEN>
```

If the name that comes back is anything other than your app, fix it in the
**Graph API Explorer** (`developers.facebook.com/tools/explorer/`):

1. Paste the same access token into the **Access Token** box
2. Set **Meta App** to your app; permissions should list
   `whatsapp_business_management` and `whatsapp_business_messaging`
3. Change the method dropdown from **GET** to **POST**
4. Set the path to `<WABA_ID>/subscribed_apps`
5. **Submit** — you want `{"success": true}`

This sticks permanently; it never needs doing again.

---

## 6. First test

Message the bot number from your phone:

```
help
```

It should reply with the format. Then send a real one:

```
Anushka Perera
0771234567
32" display replacement = 25000
```

You get `Invoice - Anushka Perera.pdf` back. Long-press it → **Forward** → pick
the customer.

---

## 7. Message format

**First line is the customer name.** A line that looks like a phone number is
the customer's phone. Every job line ends with its price. Everything else is
optional and prints nothing when left out.

```
Anushka Perera
0771234567
32" display replacement = 25000
```

Optional extras, one per line:

| Line | Effect |
|---|---|
| `addr: 14 Station Road, Ja-Ela` | address under the customer name |
| `warranty: 6 months on the panel` | warranty block (omitted when blank) |
| `paid: 5000 checking fee` | advance received, with what it was for |
| `paid` | settled in full — prints the **PAID** stamp, becomes a receipt |
| `note: Old panel returned` | notes panel |
| `method: cash / card / bank` | payment method (default cash) |

Two shortcuts on a job line:

| Line | Effect |
|---|---|
| `Panel adhesive tape x2 = 1200` | quantity 2 |
| `LC430DUY \| 43" display = 48500` | model code in the MODEL column |

The `=` is optional — `Power board repair 4500` works the same. If the bot can't
read a line it tells you which one instead of guessing.

---

## 8. Keeping the invoice design in sync

If you change the invoice layout in the desktop app, copy the two files across
and push:

```bash
cd ~/dimuthu-electronics
cp dimuthu-desktop/src/components/InvoicePDF.tsx dimuthu-website/src/components/InvoicePDF.tsx
cp dimuthu-desktop/src/lib/format.ts             dimuthu-website/src/lib/format.ts
```

They need no edits — the import paths match. The company header, bank details
and footer the bot prints live in `src/lib/settings.ts`; keep them the same as
the app's **Settings** screen.

---

## 9. If something goes wrong

The bot reports failures into the chat rather than going quiet. Beyond that,
check **Vercel → your project → Logs** and filter for `[whatsapp]`.

| Symptom | Cause |
|---|---|
| No reply, and no POST in the Vercel logs | The WhatsApp account isn't subscribed to your app — see §5a. This is by far the most likely cause |
| No reply, but a POST *does* appear in the logs | Your number isn't matching `WHATSAPP_ALLOWED_SENDERS`, or the webhook isn't subscribed to **messages** |
| `Invalid OAuth access token` | `WHATSAPP_TOKEN` is wrong or expired — regenerate a permanent one (step 3.6) |
| Webhook won't verify | `WHATSAPP_VERIFY_TOKEN` in Vercel doesn't match what you typed in Meta, or you didn't redeploy after adding it |
| `Recipient phone number not in allowed list` | Add the number under **API Setup → Manage phone number list** |

Meta's test number is a development resource. If you ever want the bot to message
customers **directly** instead of you forwarding, that needs a real number on a
second SIM and costs a few rupees per invoice — the code doesn't change.
