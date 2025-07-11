import React, { useRef, useEffect, useState } from "react";
import smiley from "../assets/smiley.png";
import boinkSound from "../assets/boink.mp3";

const BouncingBall = () => {
  const ballRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0.5, y: 0 });
  const gravityDesktop = 0.03;
  const gravityMobile = 0.01;
  const damping = 0.7;
  const ballSize = 100;
  const audioRef = useRef(new Audio(boinkSound));
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    let animationFrameId;
    let mouse = { x: 0, y: 0 };
    let touchStart = { x: 0, y: 0 };
    const gravity = isMobile ? gravityMobile : gravityDesktop;

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      touchStart = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const dx = touch.clientX - touchStart.x;
      const dy = touch.clientY - touchStart.y;
      setVelocity((prevVel) => ({
        x: prevVel.x + dx * 0.02,
        y: prevVel.y + dy * 0.02,
      }));
      touchStart = { x: touch.clientX, y: touch.clientY };
    };

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
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          }
        }

        // Repel from cloud wrapper (if exists)
        const cloudEl = document.getElementById("bouncing-cloud-wrapper");
        if (cloudEl) {
          const cloudRect = cloudEl.getBoundingClientRect();
          const ballRect = {
            left: newX,
            right: newX + ballSize,
            top: newY,
            bottom: newY + ballSize,
          };

          const intersects =
            ballRect.right > cloudRect.left &&
            ballRect.left < cloudRect.right &&
            ballRect.bottom > cloudRect.top &&
            ballRect.top < cloudRect.bottom;

          if (intersects) {
            const cx = cloudRect.left + cloudRect.width / 2;
            const cy = cloudRect.top + cloudRect.height / 2;
            const dxCloud = newX - cx;
            const dyCloud = newY - cy;
            const distCloud =
              Math.sqrt(dxCloud * dxCloud + dyCloud * dyCloud) || 1;
            const forceCloud = 1.5;
            newVx += (dxCloud / distCloud) * forceCloud;
            newVy += (dyCloud / distCloud) * forceCloud;
          }
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
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [velocity, isMobile]);

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
