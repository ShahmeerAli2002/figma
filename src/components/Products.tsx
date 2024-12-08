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
    name: "The Poplar suede sofa",
    price: "£980",
    size: "double",
    image: "/sofa.png",
  },
  {
    name: "The Dandy chair",
    price: "£250",
    size: "single",
    image: "/hero.png",
  },
  {
    name: "The Dandy chair",
    price: "£250",
    size: "single",
    image: "/chair.png",
  },
];
const Products = () => {
  return (
    <div className="w-full text-darkPrimary flex flex-col gap-4 my-16 mmd:px-20 px-5">
      <h2 className="xs:text-3xl text-2xl font-clash">Our popular products</h2>
      <div className="w-full flex sm:justify-center max-lg:overflow-x-scroll">
        <div className="flex xs:w-[1000px] w-[1100px] justify-center gap-5">
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
      </div>
      <Link href="/products">
      <div className="w-full flex justify-center">
        <button className="bg-lightGray h-12 w-36 capitalize text-sm">
          view collection
        </button>
      </div>
      </Link>
    </div>
  );
};

export default Products;
