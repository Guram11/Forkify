import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useRecipeContext } from "../Context/RecipeContext";
import React from "react";

const Search: React.FC = () => {
  const { query, setQuery } = useRecipeContext();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="search relative transition-all duration-300 flex items-center 
      focus-within:-translate-y-1 focus-within:shadow-1 rounded-full "
    >
      <input
        className="w-input py-inputY px-inputX rounded-full text-l border-0
         text-input placeholder:text-placeholder focus:outline-0"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search over 1,000,000 recipes..."
      />
      <button
        className="flex items-center justify-center gap-4 
      bg-gradient-to-br from-from to-to rounded-full border-0 text-white text-m 
      absolute right-0 transition-all duration-200 uppercase tracking-m font-semibold
      cursor-pointer font-inherit py-inputY px-btn hover:scale-105 focus:outline-0 "
      >
        <HiOutlineMagnifyingGlass className="w-logo h-logo" /> Search
      </button>
    </form>
  );
};

export default Search;
