/* eslint-disable react/prop-types */
import { useRecipeContext } from "../Context/RecipeContext";
import Loader from "./Loader";
import Error from "./Error";
import { useRecipes } from "../hooks/useRecipes";
import Recipe from "./Recipe";

function Sidebar() {
  const { query } = useRecipeContext();
  const { recipes, isLoading, error } = useRecipes(query);

  return (
    <div>
      <aside
        className="overflow-scroll relative grid-area-{aside}
       bg-white h-max"
      >
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="my-12 mx-0 overflow-scroll">
            {recipes.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe} />
            ))}
          </ul>
        )}
        {error && <Error message={error} />}
      </aside>
      <p className="text-l p-8"> Found {recipes.length} results</p>
    </div>
  );
}

export default Sidebar;
