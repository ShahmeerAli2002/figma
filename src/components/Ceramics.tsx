import React from "react";
import Card from "./Card";
import Link from "next/link";

interface CardType {
  image: string;
  size: "single" | "double";
  name: string;
  price: string;
}

const data: CardType[] = [
  {
    name: "The Dandy chair",
    price: "£250",
    size: "single",
    image: "/hero.png",
  },
  {
    name: "Rustic Vase Set",
    price: "£155",
    size: "single",
    image: "/vase.png",
  },
  {
    name: "The Silky Vase",
    price: "£125",
    size: "single",
    image: "/vase1.png",
  },
  { name: "The Lucy Lamp", price: "£399", size: "single", image: "/lamp.png" },
];
const Ceramics = ({ heading }: { heading?: string }) => {
  return (
    <div className="w-full text-darkPrimary flex flex-col gap-6 my-16 mmd:px-10 px-5">
      <h2 className="xs:text-3xl text-2xl font-clash">
        {heading ? heading : "New ceramics"}
      </h2>
      <div className="flex w-full justify-center gap-5 flex-wrap">
        {data.map((val, ind) => (
          <Card
            key={ind}
            image={val.image}
            name={val.name}
            price={val.price}
            size={val.size}
          />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link href="/products">
          <button className="bg-lightGray h-12 w-36 capitalize text-sm">
            view collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Ceramics;
