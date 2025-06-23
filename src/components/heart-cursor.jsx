import React, { useEffect } from "react";
import heartCursor from "../assets/heart-cursor.png";

const HeartCursor = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      *:hover {
        cursor: url(${heartCursor}) 4 4, auto;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default HeartCursor;
