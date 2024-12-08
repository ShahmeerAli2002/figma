import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full mmd:px-20 px-5 py-5">
      <h1 className="sm:text-3xl text-2xl text-darkPrimary my-10 capitalize font-clash">
        your shopping cart
      </h1>
      <GridCart />
      <SideDetails/>
    </div>
  );
};

export default page;

interface Item {
  name: string;
  image: string;
  price: string;
  description: string;
}
const data = [
  {
    name: "Graystone vase",
    image: "/vase3.png",
    price: "£85",
    description: "A timeless ceramic vase with a tri color grey glaze.",
  },
  {
    name: "Basic white vase",
    image: "/plant.png",
    price: "£85",
    description: "Beautiful and simple this is one for the classics",
  },
  {
    name: "Basic white vase",
    image: "/plant.png",
    price: "£85",
    description: "Beautiful and simple this is one for the classics",
  },
];

const GridCart = () => {
  return (
    <div className="sm:h-[500px] h-[350px] w-full grid gap-y-4 xxs:grid-cols-[2fr_1fr_1fr] grid-cols-1 xxs:grid-rows-[1fr_2fr_2fr_2fr] grid-rows-3 text-darkPrimary my-10">
      {["product", "quantity", "total"].map((val, ind) => (
        <h2 key={ind} className={`capitalize max-xxs:hidden ${ind !== 0 && "text-end"}`}>
          {val}
        </h2>
      ))}
      {data.map(({ name, image, description, price }) => (
        <>
          <Item
            description={description}
            image={image}
            name={name}
            price={price}
          />
          <h2 className="max-xxs:hidden text-end max-sm:text-sm">1</h2>
          <h2 className="max-xxs:hidden text-end max-sm:text-sm">£85</h2>
        </>
      ))}
    </div>
  );
};

const Item = ({ name, image, description, price }: Item) => {
  return (
    <span className="sm:w-72 w-60 h-full flex">
      <span className="h-full w-2/5 relative flex">
        <Image
          src={image}
          alt=""
          fill={true}
          className="sm:object-contain object-cover object-left"
        />
      </span>
      <span className="w-3/5 flex justify-between py-2 flex-col max-sm:ml-2">
        <h2 className="sm:text-lg text-nr capitalize">{name}</h2>
        <p className="sm:text-sm text-xs">{description}</p>
        <h3 className="max-sm:text-sm">{price}</h3>
      </span>
    </span>
  );
};

const SideDetails = () => {
  return (
    <div className="flex text-primary flex-col gap-4 items-end">
      <span className="flex gap-2 font-clash items-center">
        <h2>Subtotal</h2>
        <h2 className="text-darkPrimary text-lg">£210</h2>
      </span>
      <p className="max-sm:text-sm max-xxs:text-xs">Taxes and shipping are calculated at checkout</p>
      <span className="xxs:w-36 w-full flex justify-end">
      <Button text="Go to checkout" theme="dark"/>
      </span>
    </div>
  );
};
