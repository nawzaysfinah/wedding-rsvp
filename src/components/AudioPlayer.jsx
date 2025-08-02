import React, { useRef, useState, useEffect } from "react";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handlePlay = () => {
    if (audioRef.current && !hasPlayed) {
      const audio = audioRef.current;
      audio.currentTime = 93; // start at 1:33
      audio.volume = 0;
      audio.play().catch((error) => {
        console.error("Playback failed:", error);
      });
      setHasPlayed(true);

      // Gradually increase volume over 5 seconds
      let step = 0.02; // Volume step every 100ms
      const interval = setInterval(() => {
        if (audio.volume < 1) {
          audio.volume = Math.min(audio.volume + step, 1);
        } else {
          clearInterval(interval);
        }
      }, 100);
    }
  };

  useEffect(() => {
    const triggerAudio = () => {
      handlePlay();
      document.body.removeEventListener("click", triggerAudio);
    };

    document.body.addEventListener("click", triggerAudio);
    return () => document.body.removeEventListener("click", triggerAudio);
  }, [hasPlayed]);

  return (
    <audio ref={audioRef} loop preload="auto">
      <source src="/music/itsalwaysyou.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
