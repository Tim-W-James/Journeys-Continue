import { useEffect, useState } from "react";

/**
 * Hook to check if a css media query is true
 *
 * @param {string} query
 * @example useMediaQuery("(min-width: 1280px)")
 */
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
      const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [] // Empty array ensures effect is only run on mount and unmount
  );
  return matches;
};

export default useMediaQuery;
