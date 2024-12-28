import React, { type KeyboardEventHandler } from "react";

type ButtonsProps = {
  children: string;
  buttonClass?: "green" | "blue" | "orange" | "red";
  type?: "submit";
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEventHandler<HTMLButtonElement>) => void;
};

const Buttons = ({
  children,
  buttonClass,
  type,
  onClick,
  onKeyDown,
}: ButtonsProps) => {
  let className = "rounded border-2 border-solid bg-black p-1 text-white";
  if (buttonClass === "green") {
    className = "rounded border-2 border-solid bg-green-900 p-1 text-white";
  } else if (buttonClass === "blue") {
    className = "rounded border-2 border-solid bg-blue-900 p-1 text-white";
  } else if (buttonClass === "orange") {
    className = "rounded border-2 border-solid bg-orange-900 p-1 text-white";
  } else if (buttonClass === "red") {
    className = "rounded border-2 border-solid bg-red-900 p-1 text-white";
  }

  if (onClick !== undefined && type !== undefined) {
    return (
      <button onClick={onClick} type={type} className={className}>
        {children}
      </button>
    );
  }
  if (onClick !== undefined && type === undefined && onKeyDown !== undefined) {
    return (
      <button onClick={onClick} className={className} onKeyDown={onKeyDown}>
        {children}
        <p>test</p>
      </button>
    );
  }
  if (onClick !== undefined && type === undefined) {
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return <button className={className}>{children}</button>;
};

export default Buttons;
