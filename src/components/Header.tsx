/* eslint-disable react/prop-types */
import logo from "./../assets/logo.png";
import {
  HiOutlineBookmark,
  HiOutlinePencilSquare,
  HiOutlineXMark,
} from "react-icons/hi2";
import Search from "./Search";
import { useRecipeContext } from "../Context/RecipeContext";
import { Recipes } from "../interfaces";

function Header() {
  const {
    SetModalOpen,
    bookmarkList,
    handleSelectRecipe,
    handleDeleteBookmark,
  } = useRecipeContext();

  function handleClick() {
    SetModalOpen((prev: boolean) => !prev);
  }

  return (
    <header
      className="grid-in-head w-full flex items-center bg-bgHeader 
    justify-around relative"
    >
      <img className="h-img" src={logo} alt="forkify logo" />
      <Search />
      <div className="flex h-full">
        <button
          className="flex items-center justify-center gap-2 uppercase text-m
        font-bold bg-bgHeader py-0 px-5 text-btn font-inherit transition-all duration-200 hover:bg-bg"
          onClick={handleClick}
        >
          <HiOutlinePencilSquare className="text-to h-icon w-icon" />
          Add Recipe
        </button>
        <button
          className="bookmarkBtn flex items-center justify-center gap-2 uppercase text-m
        font-bold bg-bgHeader py-0 px-5 text-btn font-inherit transition-all duration-200 
         hover:bg-bg"
        >
          <HiOutlineBookmark className="text-to h-icon w-icon" />
          Bookmarks
        </button>
        <div
          className="bookmarks absolute right-0 top-40 z-10 w-bookmarks bg-white invisible opacity-0 
        transition-all duration-500 delay-200 shadow-bookmarks"
        >
          <ul>
            {bookmarkList.length > 0 ? (
              bookmarkList.map((recipe: Recipes) => (
                <li
                  key={recipe.id}
                  className="flex w-full transition ease-linear duration-200
                   hover:bg-bgHeader hover:-translate-y-0.5"
                  onClick={() => handleSelectRecipe(recipe.id)}
                >
                  <a
                    href="#"
                    className="px-inputX py-6 flex items-center
                     overflow-hidden gap-8 w-a decoration-0"
                  >
                    <img
                      src={recipe.image_url}
                      alt={recipe.title}
                      className="h-24 w-24 relative rounded-full opacity-70 before:block before:h-full before:w-full 
                        before:absolute before:top-0 before:left-0 before:bg-gradient-to-br from-from to-to 
                        before:opacity-40 "
                    />
                    <div>
                      <h2
                        className="text-to uppercase text-ellipsis max-w-sm whitespace-nowrap 
                        font-semibold text-2xl overflow-hidden"
                      >
                        {recipe.title}
                      </h2>
                      <p className="text-paragraph uppercase font-semibold text-lg">
                        {recipe.publisher}
                      </p>
                    </div>
                  </a>
                  <button
                    className="border-0 block cursor-pointer ml-10 "
                    onClick={() => handleDeleteBookmark(recipe.id)}
                  >
                    <HiOutlineXMark className="text-to w-icon h-icon" />
                  </button>
                </li>
              ))
            ) : (
              <p className="ml-10 mt-20 mb-20 text-3xl font-semibold flex items-center gap-4">
                <HiOutlineXMark className="text-to w-icon h-icon" /> No
                bookmarks found for query!
              </p>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
