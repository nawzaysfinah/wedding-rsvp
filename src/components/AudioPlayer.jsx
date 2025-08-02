import React, { useRef, useState } from "react";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Playback failed:", error);
      });
      setHasPlayed(true);
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-6">
      {!hasPlayed && (
        <button
          onClick={handlePlay}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Play Music
        </button>
      )}
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/itsalwaysyou.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
