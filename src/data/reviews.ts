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

// Placeholder reviews — replace with actual Google reviews
export const reviews: Review[] = [
  {
    id: 1,
    name: "Kasun W.",
    rating: 5,
    text: "Excellent service! They replaced my Samsung 55 inch panel in just two days. Very reasonable price compared to other shops in the area. Highly recommend Dimuthu Electronics.",
    date: "2 months ago",
    source: "Google",
  },
  {
    id: 2,
    name: "Nadeesha P.",
    rating: 5,
    text: "Best place in Ja-Ela for TV repairs. My LG TV had a backlight problem and they fixed it quickly. Good quality work and honest pricing.",
    date: "3 months ago",
    source: "Google",
  },
  {
    id: 3,
    name: "Ruwan D.",
    rating: 5,
    text: "Bought a 43 inch display panel from here. Price was much lower than other places because they import directly. Free installation was a great bonus too.",
    date: "1 month ago",
    source: "Google",
  },
  {
    id: 4,
    name: "Amali S.",
    rating: 4,
    text: "Very knowledgeable technicians. They diagnosed my Sony TV problem within minutes. Repair took a few days but the quality of work was excellent.",
    date: "4 months ago",
    source: "Google",
  },
  {
    id: 5,
    name: "Tharanga K.",
    rating: 5,
    text: "I have been coming to Dimuthu Electronics for years. They always give honest advice and fair prices. The best electronics repair shop in the area.",
    date: "2 weeks ago",
    source: "Google",
  },
  {
    id: 6,
    name: "Priyantha M.",
    rating: 5,
    text: "Got my TV wall mounted by their team. Very professional work, clean cable management. They even helped me choose the right bracket. Great service!",
    date: "5 months ago",
    source: "Google",
  },
];

export const featuredReviews = reviews.slice(0, 3);
