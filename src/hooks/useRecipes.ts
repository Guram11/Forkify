/* eslint-disable no-useless-catch */
/* eslint-disable no-unreachable */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Recipe {
  id: string;
  bookmarked: boolean;
  image_url: string;
  publisher: string;
  title: string;
}

interface Error {
  code: number;
  message: string;
  name: string;
}

function isApiError(x: any): x is Error {
  return x.message === true;
}

export function useRecipes(query: string) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchRecipes() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${query}&key=${
              import.meta.env.VITE_API_KEY
            }`,
            { signal: controller.signal }
          );

          if (!res.ok)
            toast.error("Something went wrong with fetching recipes");

          const data = await res.json();

          if (data.Response === "False") toast.error("Recipe not found");

          const recipesWithBookmarkProperty = data.data.recipes.map(
            (recipe: Recipe) => {
              return { ...recipe, bookmarked: false };
            }
          );

          setRecipes(recipesWithBookmarkProperty);
          setError("");
        } catch (err) {
          if (isApiError(err)) {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setRecipes([]);
        setError("");
        return;
      }

      fetchRecipes();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { recipes, isLoading, error };
}
