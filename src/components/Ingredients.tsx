import React from "react";
import { HiCheck } from "react-icons/hi2";
import { ingredient } from "../interfaces";
import { useAppSelector } from "./store";

const Ingredients: React.FC<ingredient> = ({ quantity, description, unit }) => {
  const { count } = useAppSelector((state) => state.ingredients);

  return (
    <li className="flex items-start">
      <HiCheck className="w-8 h-8 text-to flex-none mt-0.5 mr-5 leading-10" />{" "}
      <p className="leading-9">
        {(quantity * count) / 4 || null} {unit || null} {description}
      </p>
    </li>
  );
};

export default Ingredients;
