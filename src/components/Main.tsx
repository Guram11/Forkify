import {
  HiOutlineFaceSmile,
  HiChevronLeft,
  HiArrowRight,
} from "react-icons/hi2";
import SelectedRecipe from "./SelectedRecipe";
import Figure from "./Figure";
import RecipeDetails from "./RecipeDetails";
import { useRecipeContext } from "../Context/RecipeContext";
import React from "react";

function Main() {
  const { selectedId, recipe, ingredient, handleCloseRecipe } =
    useRecipeContext();

  const { title, image_url, publisher } = recipe;

  return (
    <main className="bg-bgHeader flex items-start justify-center relative">
      {selectedId && (
        <button
          className="w-icon h-icon absolute top-6 left-6 border-0 z-20 bg-white
        rounded-full text-to flex items-center justify-center cursor-pointer 
        transition-all duration-200 hover:bg-back"
          onClick={handleCloseRecipe}
        >
          <HiChevronLeft />
        </button>
      )}
      {selectedId ? (
        <div className="flex flex-col w-full">
          <Figure title={title} image_url={image_url} />
          <RecipeDetails />
          <SelectedRecipe ingredients={ingredient} />
          <div className="flex flex-col items-center py-20 px-40">
            <h2 className="text-to uppercase text-center font-bold font-l2 mb-10 text-l2">
              How To Cook It
            </h2>
            <p className="text-l3 text-center text-paragraph mb-14">
              This recipe was carefully designed and tested by
              <span className="font-bold"> {publisher}. </span>
              Please check out directions at their website.
            </p>
            <a
              className="uppercase cursor-pointer text-white border-0 rounded-full bg-gradient-to-br from-from to-to
              flex items-center transition-all duration-200 font-semibold py-5
               px-9 text-2xl decoration-0 hover:scale-105"
              href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
            >
              DIRECTIONS <HiArrowRight className="ml-4" />
            </a>
          </div>
        </div>
      ) : (
        <p className="text-3xl font-semibold flex items-start gap-4 m-20">
          <HiOutlineFaceSmile className="w-icon h-icon text-to" />
          Start by searching for a recipe or <br /> an ingredient. Have fun!
        </p>
      )}
    </main>
  );
}

export default React.memo(Main);
