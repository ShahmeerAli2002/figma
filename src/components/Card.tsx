"use client";
import Image from "next/image";
import React, { useState } from "react";
interface CardType {
  image: string;
  size: "single" | "double";
  name: string;
  price: string;
}

const Card = ({ image, size, name, price }: CardType) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div className="text-darkPrimary flex flex-col gap-3 cursor-pointer">
      {size === "single" ? (
        <span
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="h-72 xs:w-60 w-72 relative inline-block overflow-hidden hover:scale-95 duration-300"
        >
          <Image
            src={image}
            alt=""
            fill={true}
            className={`object-cover duration-500 ${
              hover ? "scale-125" : "scale-100"
            }`}
          />
        </span>
      ) : (
        <span 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="h-72 w-[480px] relative inline-block overflow-hidden hover:scale-95 duration-300">
          <Image
            src={image}
            alt=""
            fill={true}
            className={`object-cover duration-500 ${
              hover ? "scale-110" : "scale-100"
            }`}
          />
        </span>
      )}
      <span className="flex flex-col gap-2 mb-5 font-clash">
        <h2>{name}</h2>
        <p>{price}</p>
      </span>
    </div>
  );
};

export default Card;
