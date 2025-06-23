// src/components/HeartBurst.jsx
import { useEffect, useState } from "react";

function HeartBurst() {
  const [hearts, setHearts] = useState([]);

  const createHeart = (x, y) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newHeart = { id, x, y };
    setHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== id));
    }, 1200); // lifespan
  };

  useEffect(() => {
    const handleClick = (e) => {
      createHeart(e.clientX, e.clientY);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="fixed text-pink-500 text-xl animate-heart-burst pointer-events-none select-none"
          style={{
            left: heart.x,
            top: heart.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          💖
        </span>
      ))}
    </>
  );
}

export default HeartBurst;
