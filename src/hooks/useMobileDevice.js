/**
 * HOOK FOR CHECKING THE IF THE DEVICE IS MOBILE
 * @author: shivayasharma1149@gmail.com
 * @date : 26-03-2023
 */

import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";
import { MOBIEL_VIEW_WIDTH } from "../constants";

const useMobileDevice = () => {
  //#region for states
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MOBIEL_VIEW_WIDTH
  );
  //#endregion

  //#region for useEffect
  useEffect(() => {
    setIsMobile(width <= MOBIEL_VIEW_WIDTH);
  }, [width]);
  //#endregion

  return { isMobile };
};

export default useMobileDevice;
