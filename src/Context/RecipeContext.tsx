import React, { ReactNode, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Recipes, bookmarks, ingredient } from "../interfaces";

interface Props {
  children: ReactNode;
}

const KEY = "addc6774-0fda-47a3-9f7b-b3df056091ab";

const RecipeContext = React.createContext<any>(null);

const RecipeProvider = ({ children }: Props) => {
  const [query, setQuery] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [recipe, setRecipe] = useState({});
  const [ingredient, setIngredient] = useState<ingredient[]>([]);
  const [bookmarked, setBookmarked] = useLocalStorage([], "bookmarks");
  const [modalOpen, SetModalOpen] = useState<boolean>(false);

  useEffect(
    function () {
      async function getRecipe() {
        try {
          const res = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes/${selectedId}?key=${KEY}`
          );
          const data = await res.json();

          const finalData = {
            ...data.data.recipe,
            bookmarked:
              bookmarked.filter((item: bookmarks) => item.id === selectedId)
                .length > 0
                ? bookmarked.filter(
                    (item: bookmarks) => item.id === selectedId
                  )[0].bookmarked
                : false,
          };

          setRecipe(finalData);
          setIngredient(data.data.recipe.ingredients);
        } catch (err) {
          console.log(err);
        }
      }

      getRecipe();
    },
    [selectedId, setRecipe, bookmarked]
  );

  function handleSelectRecipe(id: string) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseRecipe() {
    setSelectedId(null);
  }

  function handleaddToBookmarks(recipe: Recipes) {
    setBookmarked((bookmarked: bookmarks[]) => [...bookmarked, recipe]);
  }

  function handleToggleBookmarked(recipe: Recipes) {
    setRecipe((prev) => {
      return { ...prev, bookmarked: recipe.bookmarked };
    });
  }

  function handleDeleteBookmark(id: string) {
    setBookmarked((items: bookmarks[]) =>
      items.filter((item) => item.id !== id)
    );
  }

  return (
    <RecipeContext.Provider
      value={{
        recipe,
        setRecipe,
        query,
        setQuery,
        bookmarkList: bookmarked,
        setBookmarked,
        ingredient,
        modalOpen,
        SetModalOpen,
        handleCloseRecipe,
        handleDeleteBookmark,
        handleToggleBookmarked,
        handleaddToBookmarks,
        handleSelectRecipe,
        selectedId,
        setSelectedId,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export function useRecipeContext() {
  const context = useContext(RecipeContext);

  if (!context) console.log("Error");

  return context;
}

export default RecipeProvider;
