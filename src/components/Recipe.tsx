import React from "react";
import { useRecipeContext } from "../Context/RecipeContext";
import { Recipes } from "../interfaces";

interface Props {
  recipe: Recipes;
}

const Recipe: React.FC<Props> = ({ recipe }) => {
  const { handleSelectRecipe } = useRecipeContext();

  console.log("Log1");

  return (
    <li
      className="hover:bg-bgHeader hover:-translate-y-1 transition ease-linear duration-200"
      onClick={() => handleSelectRecipe(recipe.id)}
    >
      <a href="#" className="py-6 px-12 flex items-center decoration-0 gap-8 ">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="h-24 w-24 relative rounded-full opacity-70 
          before:block before:h-full before:w-full 
    before:absolute before:top-0 before:left-0 before:bg-gradient-to-br
     from-from to-to 
    before:opacity-40 "
        />
        <div>
          <h2
            className="text-to uppercase text-ellipsis overflow-hidden
          font-semibold text-m max-w-sm whitespace-nowrap "
          >
            {recipe.title}
          </h2>
          <p className="text-paragraph uppercase font-semibold text-s">
            {recipe.publisher}
          </p>
        </div>
      </a>
    </li>
  );
};

export default React.memo(Recipe);
