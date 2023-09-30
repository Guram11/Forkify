import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Recipes, bookmarks, ingredient } from "../interfaces";

interface Props {
  children: ReactNode;
}

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
            `https://forkify-api.herokuapp.com/api/v2/recipes/${selectedId}?key=${
              import.meta.env.VITE_API_KEY
            }`
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
          console.error(err);
        }
      }

      getRecipe();
    },
    [selectedId, setRecipe, bookmarked]
  );

  const handleSelectRecipe = useCallback((id: string) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }, []);

  const handleCloseRecipe = useCallback(() => {
    setSelectedId(null);
  }, []);

  const handleaddToBookmarks = useCallback((recipe: Recipes) => {
    setBookmarked((bookmarked: bookmarks[]) => [...bookmarked, recipe]);
  }, []);

  const handleToggleBookmarked = useCallback((recipe: Recipes) => {
    setRecipe((prev) => {
      return { ...prev, bookmarked: recipe.bookmarked };
    });
  }, []);

  const handleDeleteBookmark = useCallback((id: string) => {
    setBookmarked((items: bookmarks[]) =>
      items.filter((item) => item.id !== id)
    );
  }, []);

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
