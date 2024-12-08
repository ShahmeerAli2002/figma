import React from "react";
import { PiPlantLight } from "react-icons/pi";
import { GoCreditCard } from "react-icons/go";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbTruckDelivery } from "react-icons/tb";
import Link from "next/link";
const cardsData = [
  {
    heading: "Next day as standard",
    paragraph: "Order before 3pm and get your order the next day as standard",
    Icon: TbTruckDelivery,
  },
  {
    heading: "Made by true artisans",
    paragraph: "Handmade crafted goods made with real passion and craftmanship",
    Icon: VscWorkspaceTrusted,
  },
  {
    heading: "Unbeatable prices",
    paragraph:
      "For our materials and quality you won't find better prices anywhere",
    Icon: GoCreditCard,
  },
  {
    heading: "Recycled packaging",
    paragraph:
      "We use 100% recycled packaging to ensure our footprint is manageable",
    Icon: PiPlantLight,
  },
];
const Brand = () => {
  return (
    <div className="w-full flex flex-col items-center sm:gap-10 gap-5 mmd:px-20 xs:px-5 px-2 py-14 max-sm:pt-5 text-darkPrimary">
      <h2 className="xs:text-2xl text-xl capitalize font-clash">
        What makes our brand different
      </h2>
      <div className="flex w-full justify-center flex-wrap items-center gap-5">
        {cardsData.map((val, ind) => (
          <Link key={ind} href="/about">
            <Card
              heading={val.heading}
              paragraph={val.paragraph}
              Icon={val.Icon}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brand;

const Card = ({
  Icon,
  heading,
  paragraph,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  heading: string;
  paragraph: string;
}) => {
  return (
    <div className="flex flex-col xs:gap-4 gap-2 xs:w-60 w-72 xs:px-2 py-3">
      <Icon className="xs:h-6 h-5 xs:w-6 w-5" />
      <h2 className="xs:text-xl text-lg capitalize font-clash">{heading}</h2>
      <p className="text-sm">{paragraph}</p>
    </div>
  );
};
