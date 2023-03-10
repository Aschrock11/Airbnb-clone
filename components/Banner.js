import React from "react";
import Image from "next/legacy/image";

function Banner() {
  return (
    <div className=" relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt="image"
      />
      <div className="absolute top-1/2 w-full text-center text-sm sm:text-lg">
        <p>Not sure where to go? Perfect.</p>
        <button className=" text-purple-500 bg-white py-4 px-10 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
