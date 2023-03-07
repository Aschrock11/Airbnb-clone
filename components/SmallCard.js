import React from "react";
import Image from "next/image";
function SmallCard({ img, location, distance }) {
  return (
    <div>
      <div className="relative h-16 w-16">
        <Image className=" h-6 w-6 " src={img} alt="icon" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
