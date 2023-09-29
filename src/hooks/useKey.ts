import { useEffect } from "react";

export function useKey(key: string, action: () => void) {
  useEffect(
    function () {
      document.addEventListener("keydown", function (e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      });

      return function () {
        document.removeEventListener("keydown", function (e) {
          if (e.code === "Escape") {
            action();
          }
        });
      };
    },
    [action, key]
  );
}
