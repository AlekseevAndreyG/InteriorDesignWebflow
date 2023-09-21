import ReactPlayer from "react-player";
import "./ServicesMorePlayer.css";
function ServicesMorePlayer() {
  return (
    <section className="services-more-player">
      <div className="container">
        <div className="services-more-player-wrap">
          <div className="player-wrapper">
            <ReactPlayer
              url="/img/services-more-page/player/services-more-page-video.mp4"
              width="100%"
              height="100%"
              controls={true}
              className="react-player"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesMorePlayer;
