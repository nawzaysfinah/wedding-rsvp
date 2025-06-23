import React, { useEffect } from "react";
import heartCursor from "../assets/heart-cursor.png";

const HeartCursor = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body.heart-cursor-active *:hover {
        cursor: none;
      }

      body.heart-cursor-active::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 32px;
        height: 32px;
        background-image: url(${heartCursor});
        background-size: contain;
        background-repeat: no-repeat;
        pointer-events: none;
        transform: translate(var(--cursor-x, 0px), var(--cursor-y, 0px)) scale(var(--cursor-scale, 1));
        transform-origin: center;
        z-index: 9999;
      }
    `;
    document.head.appendChild(style);

    let timeout;
    let lastX = null;
    let lastY = null;
    let lastTime = null;

    const handleMouseMove = (e) => {
      const currentTime = performance.now();
      const x = e.clientX;
      const y = e.clientY;

      document.body.style.setProperty("--cursor-x", `${x}px`);
      document.body.style.setProperty("--cursor-y", `${y}px`);

      if (lastX !== null && lastY !== null && lastTime !== null) {
        const dx = x - lastX;
        const dy = y - lastY;
        const dt = currentTime - lastTime;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const speed = distance / dt;

        if (speed > 0.1) {
          document.body.classList.add("heart-cursor-active");
          const scale = Math.min(2.5, 1 + speed * 2);
          document.body.style.setProperty("--cursor-scale", scale.toFixed(2));
        } else {
          document.body.classList.remove("heart-cursor-active");
        }
      }

      lastX = x;
      lastY = y;
      lastTime = currentTime;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.body.classList.remove("heart-cursor-active");
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default HeartCursor;
