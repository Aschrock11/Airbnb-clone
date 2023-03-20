export default function handler(req, res) {
  res.status(200).json([
    {
      key: "1",

      img: "https://airbnb-clone-rouge-chi.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2Fq7j&w=3840&q=75",

      title: "Unique Stays",
    },
    {
      key: "2",

      img: "https://airbnb-clone-rouge-chi.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2Fs03&w=3840&q=75",

      title: "Entire homes",
    },
    {
      key: "3",

      img: "https://airbnb-clone-rouge-chi.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F2io&w=3840&q=75",

      title: "Outdoor getaways",
    },
    {
      key: "4",
      img: "https://airbnb-clone-rouge-chi.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F8ix&w=3840&q=75",

      title: "Pet friendly",
    },
  ]);
}
