import { HiOutlineCloudArrowUp } from "react-icons/hi2";
import { useKey } from "../hooks/useKey";
import { useEffect } from "react";
import { useRecipeContext } from "../Context/RecipeContext";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function ModalWindow() {
  const { register, handleSubmit } = useForm();
  const { modalOpen, SetModalOpen } = useRecipeContext();

  function closeModal() {
    SetModalOpen(false);
  }

  const submit = handleSubmit((input) => {
    async function upload() {
      try {
        let ingArray: string[] = [];

        if (input.ingredient1) ingArray.push(input.ingredient1);
        if (input.ingredient2) ingArray.push(input.ingredient2);
        if (input.ingredient3) ingArray.push(input.ingredient3);
        if (input.ingredient4) ingArray.push(input.ingredient4);
        if (input.ingredient5) ingArray.push(input.ingredient5);
        if (input.ingredient6) ingArray.push(input.ingredient6);

        const ingredients = ingArray.map((ing) => {
          const ingArr = ing.split(",").map((el) => el.trim());

          if (ingArr.length > 0 && ingArr.length !== 3) {
            toast.error(
              "Wrong ingredient fromat! Please use the correct format :)"
            );
            SetModalOpen(false);
          }

          const [quantity, unit, description] = ingArr;

          return { quantity: quantity ? +quantity : null, unit, description };
        });

        const newRecipe = {
          title: input.title,
          source_url: input.url,
          image_url: input.imageUrl,
          cooking_time: +input.prepTime,
          publisher: input.publisher,
          servings: +input.servings,
          ingredients,
        };

        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/?key=${
            import.meta.env.VITE_API_KEY
          }`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([newRecipe]),
          }
        );
        const data = await res.json();

        if (!res.ok) {
          toast.error(`${data.message} (${res.status})`);
        } else {
          toast.success("Recipe uploaded successfully!");
        }

        SetModalOpen(false);
      } catch (err) {
        console.error(err);
      }
    }

    upload();
  });

  useEffect(
    function () {
      window.addEventListener("click", function (event) {
        if (event.target === this.document.querySelector(".overlay")) {
          SetModalOpen(false);
        }
      });
    },
    [SetModalOpen]
  );

  useKey("Escape", closeModal);

  return (
    <div
      className={
        modalOpen
          ? "fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-modal bg-white rounded-lg py-20 px-24 shadow-modal z-50 transition-all duration-500"
          : "fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-modal bg-white rounded-lg py-20 px-24 shadow-modal z-50 transition-all duration-500 invisible opacity-0"
      }
    >
      <button
        onClick={() => SetModalOpen((prev: boolean) => !prev)}
        className="text-inherit font-inherit bg-0 border-0 cursor-pointer text-6xl absolute top-4 right-8"
      >
        &times;
      </button>
      <form className="upload" onSubmit={submit}>
        <div className="upload__column">
          <h3 className="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input
            required
            {...register("title")}
            placeholder="test12"
            name="title"
            type="text"
          />
          <label>URL</label>
          <input
            {...register("url")}
            placeholder="test12"
            required
            name="url"
            type="text"
          />
          <label>Image URL</label>
          <input
            {...register("imageUrl")}
            placeholder="test12"
            required
            name="imageUrl"
            type="text"
          />
          <label>Publisher</label>
          <input
            {...register("publisher")}
            placeholder="test12"
            required
            name="publisher"
            type="text"
          />
          <label>Prep time</label>
          <input
            {...register("prepTime")}
            placeholder="1"
            required
            name="prepTime"
            type="text"
          />
          <label>Servings</label>
          <input
            {...register("servings")}
            placeholder="1"
            required
            name="servings"
            type="text"
          />
        </div>

        <div className="upload__column">
          <h3 className="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            required
            {...register("ingredient1")}
            name="ingredient1"
            placeholder="Example: '1,kg,rice'"
          />
          <label>Ingredient 2</label>
          <input
            {...register("ingredient2")}
            name="ingredient2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            {...register("ingredient3")}
            name="ingredient3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            {...register("ingredient4")}
            name="ingredient4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            {...register("ingredient5")}
            name="ingredient5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            {...register("ingredient6")}
            name="ingredient6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button
          className="flex items-center justify-center gap-4 col-span-full justify-self-center
      bg-gradient-to-br from-from to-to rounded-full border-0 text-white text-m 
     transition-all duration-200 uppercase tracking-m font-semibold
      cursor-pointer font-inherit py-inputY px-btn hover:scale-105 focus:outline-0 "
        >
          <HiOutlineCloudArrowUp className="text-l2" />
          <span>Upload</span>
        </button>
      </form>
    </div>
  );
}

export default ModalWindow;
