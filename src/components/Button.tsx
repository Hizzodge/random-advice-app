import React, { DetailedHTMLProps } from "react";
import Dice from "../assets/svg/icon-dice.svg";
import "./button.css";

interface ButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className="button" {...props}>
      <img src={Dice} />
    </button>
  );
};

export default Button;
