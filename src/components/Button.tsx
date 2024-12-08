import React from "react";

const Button = ({ text, theme }: { text: string; theme: "dark" | "light" }) => {
  return (
    <button
      className={`h-10 px-4 ${
        theme === "dark"
          ? "text-white bg-darkPrimary"
          : "text-darkPrimary bg-lightGray"
      } text-sm`}
    >
      {text}
    </button>
  );
};

export default Button;
