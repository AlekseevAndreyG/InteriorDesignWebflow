import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import "./ServicesMorePlayer.css";

function ServicesMorePlayer() {
  const [isPlaying, setPlaying] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleSeek = (e) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleToggleFullScreen = () => {
    if (playerRef.current) {
      playerRef.current.requestFullscreen();
    }
  };

  const handleToggle = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <section className="services-more-player">
      <div className="container">
        <div className="services-more-player-wrap">
          <div className={`player-wrapper ${isFullScreen ? "fullscreen" : ""}`}>
            <ReactPlayer
              ref={playerRef}
              url="/img/services-more-page/player/services-more-page-video.mp4"
              playing={isPlaying}
              volume={volume}
              width="100%"
              height="100%"
              onProgress={({ played }) => setPlayed(played)}
              onSeek={handleSeek}
            />
          </div>
          <div className="controls">
            <input
              className="volume-slider"
              type="range"
              min={0}
              max={1}
              step={0.1}
              value={volume}
              onChange={handleVolumeChange}
            />
            <input
              className="seek-slider"
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={played}
              onChange={handleSeek}
            />
            <button
              className={`play-button ${isPlaying ? "playing" : ""}`}
              onClick={handleToggle}
            ></button>
            <button
              className={`fullscreen-button ${
                isFullScreen ? "exit-fullscreen" : "enter-fullscreen"
              }`}
              onClick={handleToggleFullScreen}
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesMorePlayer;