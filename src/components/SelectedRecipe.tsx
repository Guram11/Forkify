import React from "react";
import Ingredients from "./Ingredients";
import { ingredient } from "../interfaces";

interface Props {
  ingredients: ingredient[];
}

const SelectedRecipe: React.FC<Props> = ({ ingredients }) => {
  return (
    <div
      className="py-20 px-32 text-l leading-6 bg-bg 
    flex flex-col items-center gap-y-16"
    >
      <h2 className="text-to uppercase text-center text-l2 font-bold">
        Recipe Ingredients
      </h2>
      <ul className="grid grid-cols-2 gap-y-10 gap-x-12">
        {ingredients.map((ingredient, i) => (
          <Ingredients
            key={i}
            description={ingredient.description}
            unit={ingredient.unit}
            quantity={ingredient.quantity}
          />
        ))}
      </ul>
    </div>
  );
};

export default SelectedRecipe;
