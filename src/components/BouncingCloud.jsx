import React, { useRef, useEffect, useState } from "react";
import cloudImage from "../assets/cloud-background.png";

const NUM_CLOUDS = 1;

const BouncingCloud = () => {
  const [positions, setPositions] = useState(
    Array.from({ length: NUM_CLOUDS }, () => ({
      x: Math.random() * 200,
      y: Math.random() * 200,
    }))
  );
  const directions = useRef(
    Array.from({ length: NUM_CLOUDS }, () => ({
      dx: 1.5 + Math.random(),
      dy: 1.5 + Math.random(),
    }))
  );
  const containerRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      const container = containerRef.current;
      if (!container) return;

      const { offsetWidth, offsetHeight } = container;
      setPositions((prevPositions) =>
        prevPositions.map((pos, index) => {
          let { x, y } = pos;
          let { dx, dy } = directions.current[index];

          const imgWidth = 400;
          const imgHeight = 240;

          x += dx;
          y += dy;

          if (x + imgWidth >= offsetWidth || x <= 0)
            directions.current[index].dx *= -1;
          if (y + imgHeight >= offsetHeight || y <= 0)
            directions.current[index].dy *= -1;

          return { x, y };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-[-1] overflow-visible"
    >
      {positions.map((position, index) => (
        <img
          key={index}
          src={cloudImage}
          alt="Bouncing Cloud"
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            width: "800px",
            height: "480px",
            opacity: 1.0,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
};

export default BouncingCloud;
