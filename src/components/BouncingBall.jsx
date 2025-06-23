import React, { useRef, useEffect, useState } from "react";
import smiley from "../assets/smiley.png";

const BouncingBall = () => {
  const ballRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0.5, y: 0 });
  const gravity = 0.03;
  const damping = 0.7;
  const ballSize = 100;

  useEffect(() => {
    let animationFrameId;
    let mouse = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      setPosition((prev) => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;
        let newVx = velocity.x;
        let newVy = velocity.y + gravity;

        // Repel from mouse
        const dx = newX - mouse.x;
        const dy = newY - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repulsionRadius = 100;

        if (distance < repulsionRadius) {
          const force = (repulsionRadius - distance) / repulsionRadius;
          newVx += (dx / distance) * force * 5;
          newVy += (dy / distance) * force * 5;
        }

        // Bounds
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        if (newX <= 0 || newX + ballSize >= windowWidth) {
          newVx *= -damping;
          newX = Math.max(0, Math.min(newX, windowWidth - ballSize));
        }
        if (newY + ballSize >= windowHeight) {
          newVy *= -damping;
          newY = windowHeight - ballSize;
        }

        setVelocity({ x: newVx, y: newVy });
        return { x: newX, y: newY };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [velocity]);

  return (
    <img
      ref={ballRef}
      src={smiley}
      alt="Smiley Ball"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: `${ballSize}px`,
        height: `${ballSize}px`,
        pointerEvents: "none",
        zIndex: 9999,
        transition: "transform 0.1s ease-out",
      }}
    />
  );
};

export default BouncingBall;
