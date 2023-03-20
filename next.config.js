/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  images: {
    domains: [
      "links.papareact.com",
      "www.google.com",
      "airbnb-clone-rouge-chi.vercel.app",
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiYXNjaHJvY2sxMSIsImEiOiJjbGYxbTR1NzIwOW85M3FteGZkdnlnczV6In0.0z12cAlwfq73HC-04_Pqzw",
  },
};
