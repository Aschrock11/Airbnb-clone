import Head from "next/head";
import Image from "next/legacy/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

const Home = ({ exploreData, cardsData }) => {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className=" pt-6">
          <h2
            className="text-4xl font-semibold 
          pb-5"
          >
            Explore Nearby
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ key, img, distance, location }) => (
              <SmallCard
                key={key}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className=" text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className=" flex  space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {cardsData?.map(({ key, img, title }) => (
              <MediumCard key={key} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://airbnb-clone-rouge-chi.vercel.app/api/airbnbData"
  ).then((response) => response.json());

  const cardsData = await fetch(
    "https://airbnb-clone-rouge-chi.vercel.app/api/airbnbData"
  ).then((response) => response.json());

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
