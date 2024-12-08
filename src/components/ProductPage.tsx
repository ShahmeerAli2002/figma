import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductPage = () => {
  return (
    <div className="w-full flex max-md:flex-col">
      <ImageSection />
      <DetailsSection />
    </div>
  );
};

export default ProductPage;

const ImageSection = () => {
  return (
    <section className="relative min-h-[450px] md:w-1/2 w-full">
      <Image src="/chair1.png" alt="" fill={true} className="object-cover" />
    </section>
  );
};

const DetailsSection = () => {
  return (
    <section className="flex flex-col md:w-1/2 w-full text-text2 sm:gap-5 gap-3 mmd:px-14 px-5 py-5">
      <h1 className="sm:text-4xl text-2xl text-darkPrimary font-clash">
        The Dandy Chair
      </h1>
      <h3 className="sm:text-xl text-lg text-black">£250</h3>
      <span className="sm:mt-4">
        <h3 className="text-darkPrimary font-clash">Description</h3>
        <p className="max-sm:text-sm">
          A timeless design, with premium materials features as one of our most
          popular and iconic pieces. The dandy chair is perfect for any stylish
          living space with beech legs and lambskin leather upholstery.
        </p>
        <ul className="list-disc ml-5 mt-2">
          {[
            "Premium material",
            "Handmade upholstery",
            "Quality timeless classic",
          ].map((val, ind) => (
            <li key={ind} className="max-sm:text-sm">
              {val}
            </li>
          ))}
        </ul>
      </span>
      <Dimensions />
      <Amount />
    </section>
  );
};

const Dimensions = () => {
  return (
    <span className="flex flex-col gap-2 mt-5 max-sm:text-sm">
      <h3 className="text-darkPrimary capitalize font-clash text-nr">
        dimensions
      </h3>
      <span className="h-20 w-60 grid grid-cols-3 grid-rows-2">
        {["height", "width", "depth", "110cm", "75cm", "50cm"].map(
          (val, ind) => (
            <span key={ind} className="h-full w-full flex items-center">
              <h3
                className={`capitalize ${
                  ind > 2 ? "text-text2" : "text-darkPrimary font-clash"
                }`}
              >
                {val}
              </h3>
            </span>
          )
        )}
      </span>
    </span>
  );
};

const Amount = () => {
  return (
    <div className="w-full flex justify-between">
      <span className="flex items-center gap-4">
        <h3 className="capitalize text-darkPrimary font-clash">amount:</h3>
        <span className="flex sm:w-28 w-20 sm:h-12 h-8 bg-lightGray items-center justify-around">
          {["-", "1", "+"].map((val, ind) => (
            <span
              key={ind}
              className={`${
                val === "1" ? "text-darkPrimary" : "text-text2/50"
              }`}
            >
              {val}
            </span>
          ))}
        </span>
      </span>
      <Link href="/cart">
        <Button text="Add to cart" theme="dark" />
      </Link>
    </div>
  );
};
