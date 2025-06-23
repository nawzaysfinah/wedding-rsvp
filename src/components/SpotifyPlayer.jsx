// src/components/SpotifyPlayer.jsx
import React from "react";

const SpotifyPlayer = () => {
  return (
    <div className="w-full flex justify-center mt-6">
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/6MYoV7Pes2uOg7GoIIgTLY?utm_source=generator&theme=0"
        width="80%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
