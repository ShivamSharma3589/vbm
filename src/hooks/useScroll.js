/**
 * HOOK FOR CHECKING IF THE CLIENT SCROLLED THE PAGE
 * @author: shivayasharma1149@gmail.com
 * @date : 26-03-2023
 */

import { useState, useEffect } from "react";

const useScroll = () => {
  //#region for states
  const [scrollY, setScrollY] = useState(window.scrollY);
  //#endregion

  //#region for function
  function handleScroll() {
    setScrollY(window.scrollY);
  }
  //#endregion

  //#region for useEffect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //#endregion
  
  return scrollY;
};

export default useScroll;
