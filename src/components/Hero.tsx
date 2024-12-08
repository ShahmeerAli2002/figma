import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex max-md:flex-col sm:py-14 mmd:px-20 xs:px-5">
      <TextSection />
      <ImageSection />
    </div>
  );
};

export default Hero;

const TextSection = () => {
  return (
    <section className="sm:h-[450px] h-auto md:w-3/5 w-full bg-darkPrimary text-white sm:py-12 py-8 flex flex-col justify-between sm:px-10 px-5 max-mmd:gap-16 max-sm:gap-10 overflow-hidden">
      <div className="flex flex-col sm:gap-8 gap-5">
        <h1 className="sm:text-2xl text-2xl xs:w-96 font-clash">
          The furniture brand for the future, with timeless designs
        </h1>
        <Link href="/products">
        <button className="bg-primary h-12 w-36 capitalize text-sm max-sm:hidden">view collection</button>
        </Link>
      </div>
      <p className="max-sm:text-sm opacity-90">
        A new era in eco friendly furniture with Avelon, the French luxury
        retail brand with nice fonts, tasteful colors and a beautiful way to
        display things digitally using modern web technologies.
      </p>
      <button className="bg-primary sm:hidden capitalize text-sm px-4 py-3">view collection</button>
    </section>
  );
};
const ImageSection = () => {
  return (
    <section className="relative sm:h-[450px] max-xs:hidden h-72 md:w-2/5 w-full bg-[#83A9AC]">
      <Image src="/hero.png" alt="" fill={true} className="object-contain object-center" />
    </section>
  );
};
