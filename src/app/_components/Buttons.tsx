import React from "react";

type ButtonsProps = {
  children: string;
  buttonClass: "green" | "blue" | "orange";
};

const Buttons = ({ children, buttonClass }: ButtonsProps) => {
  let className = "rounded border-2 border-solid bg-black p-1 text-white";
  if (buttonClass === "green") {
    className = "rounded border-2 border-solid bg-green-900 p-1 text-white";
  } else if (buttonClass === "blue") {
    className = "rounded border-2 border-solid bg-blue-900 p-1 text-white";
  } else if (buttonClass === "orange") {
    className = "rounded border-2 border-solid bg-orange-900 p-1 text-white";
  }
  return <button className={className}>{children}</button>;
};

export default Buttons;
