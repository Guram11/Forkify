/* eslint-disable react/prop-types */
import {
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineBookmark,
  HiBookmark,
} from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./store/ingredientsSlice";
import { useRecipeContext } from "../Context/RecipeContext";
import { bookmarks } from "../interfaces";
import React from "react";
import { useAppSelector } from "./store";

const RecipeDetails: React.FC = () => {
  const { recipe, bookmarkList, handleToggleBookmarked, handleaddToBookmarks } =
    useRecipeContext();
  const { count } = useAppSelector((state) => state.ingredients);
  const dispatch = useDispatch();

  const {
    id,
    title,
    image_url,
    cooking_time,
    servings,
    publisher,
    bookmarked,
  } = recipe;

  function handleClick() {
    const newRecipe = {
      id,
      title,
      image_url,
      cooking_time,
      servings,
      publisher,
      bookmarked: !bookmarked,
    };

    handleToggleBookmarked(newRecipe);

    if (bookmarkList.filter((item: bookmarks) => item.id === id).length > 0)
      return;

    handleaddToBookmarks(newRecipe);
  }

  return (
    <div className="flex items-center justify-between pb-14 px-pad2XL pt-padXL">
      <div className="flex items-center uppercase gap-2 text-l">
        <HiOutlineClock className="h-12 w-12 text-to" />
        <span className="font-bold ml-2">{cooking_time} </span>
        <span>Minutes </span>
      </div>
      <div className="mr-64 flex items-center uppercase gap-2 text-l">
        <HiOutlineUsers className="h-12 w-12 text-to" />
        <span className="font-bold ml-2">{count}</span>
        <span>Servings</span>
        <div className="flex items-center uppercase gap-2 text-l ml-4 ">
          <button
            onClick={() => dispatch(decrement())}
            className="h-8 w-8 rounded-full text-to 
          bg-white border-2 border-to border-solid flex items-center 
          justify-center transition-all duration-200 cursor-pointer text-l hover:-translate-y-px"
          >
            -
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="h-8 w-8 rounded-full text-to 
          bg-white border-2 border-to border-solid flex items-center
           justify-center transition-all duration-200 cursor-pointer text-l hover:-translate-y-px"
          >
            +
          </button>
        </div>
      </div>

      <button
        className="flex items-center p-4 rounded-full border-0 bg-gradient-to-br from-from to-to
          justify-center transition-all duration-200 cursor-pointer hover:scale-105"
        onClick={handleClick}
      >
        {recipe.bookmarked ? (
          <HiBookmark className="w-logo h-logo text-white" />
        ) : (
          <HiOutlineBookmark className="w-logo h-logo text-white" />
        )}
      </button>
    </div>
  );
};

export default RecipeDetails;
