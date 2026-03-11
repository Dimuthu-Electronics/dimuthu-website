export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  source: "Google";
}

export const googleRating = {
  overall: 4.6,
  totalReviews: 48,
  profileUrl:
    "https://www.google.com/search?q=DIMUTHU+Electronics+Reviews",
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Manoj Indrajith",
    rating: 5,
    text: "Had a invaluable experience with them. The display of the TV was replaced by them and after 3 days it becomes invisible again. When I informed them they came back same day and fixed up with delivery free of charge.",
    date: "5 months ago",
    source: "Google",
  },
  {
    id: 2,
    name: "Milroy Fonseka",
    rating: 5,
    text: "I highly recommend this place to replace your TV Display and any TV repairs. Excellent Service and valuable customer care have been provided by Mr. Dimuthu and Mr. Denuwan. Mr. Dimuthu (Owner), who is an expert in the particular field (around 30 years) and he shares his knowledge without any hesitation. Actually, they replaced my TV Display within 30 minutes with an excellent service.",
    date: "9 months ago",
    source: "Google",
  },
  {
    id: 3,
    name: "Ranjith Perera",
    rating: 5,
    text: "I brought my tv to Dimuthu electronics last week. There was a display problem. Within 30 min. display was replaced for a very reasonable price. Owner was very friendly.",
    date: "6 months ago",
    source: "Google",
  },
  {
    id: 4,
    name: "Dhananjaya Amarakoon",
    rating: 5,
    text: "Excellent and good customer service. I recommend this place for TV repair works.",
    date: "3 months ago",
    source: "Google",
  },
  {
    id: 5,
    name: "Nimantha Gunawardana",
    rating: 5,
    text: "This 8yrs old smart tv had a panel issue and all the backlights were gone, I found this place on google maps and decided to go there because of the reviews, not going to lie one of best places to get your work done on your tv's and I was not overcharged the tv wasn't working at all before now it's working even better. Such a good owner. Kudos!",
    date: "2 years ago",
    source: "Google",
  },
  {
    id: 6,
    name: "Damith Silva",
    rating: 5,
    text: "Highly recommended. Very reasonable and reliable. Many places were refused to repair my tv as that samsung model was not common in Sri Lanka and it's difficult to find the required spares within Sri Lanka. \"Dimuthu Electronics\" was introduced by one of my friend. They managed to find the components and complete the repair within very short time. They provide updates about the process of the repair frequently. Repair charge was very reasonable. Thank you. All the best!",
    date: "a year ago",
    source: "Google",
  },
  {
    id: 7,
    name: "Raveen Jayasinghe",
    rating: 5,
    text: "Highly recommend place to repair your TVs. Owner is every helpful and knowledgeable about what they do. They are quickly attend and get the work done.",
    date: "11 months ago",
    source: "Google",
  },
  {
    id: 8,
    name: "Lakshan Jayasinghe",
    rating: 5,
    text: "I recently had my TV repaired by Dimuthu Electronics, and I am extremely pleased with their service. The staff was friendly, knowledgeable, and quickly diagnosed the issue. The repair process was efficient, and they used high-quality replacement parts. They completed the repair within the promised timeframe, and the pricing was fair. I highly recommend Dimuthu Electronics for their impressive TV repair service.",
    date: "2 years ago",
    source: "Google",
  },
  {
    id: 9,
    name: "Amila Sampath",
    rating: 5,
    text: "Extremely happy with their Service. They were able to fix the power issue of my viewsonic 32\" monitor quickly and at a reasonable price. Admire their customer service also. Highly recommend for anyone who is looking to get their LED screens repaired.",
    date: "2 years ago",
    source: "Google",
  },
  {
    id: 10,
    name: "sudeepa Jananee",
    rating: 5,
    text: "WONDERFUL AND QUICK SERVICE!! I took my LED TV for several places and every place that I went told me that my only solution was to throw away my TV and get a new one. But then I got to know about DIMUTHU ELECTRONICS and when I took my TV for them, they undertook it without any hesitation and fixed my TV within few days for a reasonable price and now my TV is good as new and I am glad for Mr Dimuthu Fernando the owner of this wonderful place for fixing me my TV without making me buy a new one. Highly recommend for every one.",
    date: "3 years ago",
    source: "Google",
  },
  {
    id: 11,
    name: "Anuranga",
    rating: 5,
    text: "They Repaired My Haier Tv Display Problem Few months ago. Parts are little bit priced high due to the government import barriers. Recommend the shop.",
    date: "a year ago",
    source: "Google",
  },
  {
    id: 12,
    name: "Wasantha Jayakodi",
    rating: 5,
    text: "QUALITY SERVICE WITH A GUARANTEE! RECOMMEND FOR EVERYONE! Thank you for fixing my 2 LED Samsung Tvs in under 3 days. And I even got a reasonable price. Seriously I recommend Dimuthu Electronics for all your electronic repair needs.",
    date: "3 years ago",
    source: "Google",
  },
  {
    id: 13,
    name: "Nishen Abeysinghe",
    rating: 5,
    text: "The back light issue of my LG 42\" TV was rectified by replacing all back lights with original parts within 24 Hrs. The professionalism displayed and speedy action of the owner of this shop is commendable. Recommended for repair of your valuable electronic items with original spares for affordable price.",
    date: "4 years ago",
    source: "Google",
  },
  {
    id: 14,
    name: "Nishan Batawala",
    rating: 5,
    text: "I have been getting the service from Dimuthu Electronics for almost 20 years. Every time i got my technical issues solved and fixed in time perfectly more than i have ever expected from service center. The most important factor that i would like to highlight is that none of the issues were impossible to solve at \"Dimuthu Electronics\". It is my absolute pleasure to recommend Dimuthu Electronics for excellent quality service.",
    date: "4 years ago",
    source: "Google",
  },
  {
    id: 15,
    name: "nikmina Rashen",
    rating: 5,
    text: "A good place to go without fear, they will do the job well.",
    date: "6 months ago",
    source: "Google",
  },
];

export const featuredReviews = reviews.slice(0, 3);
