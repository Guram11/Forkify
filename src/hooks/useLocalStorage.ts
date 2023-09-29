import { useState, useEffect } from "react";
import { bookmarks } from "../interfaces";

export function useLocalStorage(initialState: bookmarks[], key: string) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem("bookmarks", JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
