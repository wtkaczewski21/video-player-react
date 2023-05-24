import React from "react";
import FavoriteIcon from "../../assets/love-icon@2x.png";
import ShareIcon from "../../assets/share-icon@2x.png";
import VolumeIcon from "../../assets/volume-icon.png";
import FullscreenIcon from "../../assets/fullscreen-icon.png";
import ViewsIcon from "../../assets/views-icon.png";
import HeartIcon from "../../assets/heart-icon.png";
import CommentIcon from "../../assets/comment-icon.png";
import "./VideoPlayer.css";
import RelatedVideo from "../../components/RelatedVideo/RelatedVideo";

function VideoPlayer() {
  return (
    <div className="container">
      <div className="main">
        <div className="video">
          <div className="top-right-icons">
            <img
              className="favorite-icon"
              src={FavoriteIcon}
              alt="Heart Icon"
            />
            <img className="share-icon" src={ShareIcon} alt="Share Icon" />
          </div>
          <div className="bottom-icons">
            <div className="play-button">
              <img src={ViewsIcon} alt="Play Icon" />
            </div>
            <div className="length-bar">
              <div />
            </div>
            <div className="length-timer">
              0:24 / <span>3:51</span>
            </div>
            <img className="volume-icon" src={VolumeIcon} alt="Volume Icon" />
            <div className="volume-bar">
              <div>
                <div />
              </div>
            </div>
            <div className="resolution">720</div>
            <img
              className="fullscreen-icon"
              src={FullscreenIcon}
              alt="Fullscreen Icon"
            />
          </div>
        </div>
        <div className="informations">
          <h1 className="video-title">
            Lord of the Rings: The Fellowship of the Ring (official trailer)
          </h1>
          <p className="video-description">
            The Lord of the Rings is an epic high-fantasy novel written by
            English author J. R. R. Tolkien, The story began as a sequel to
            Tolkien's 1937 fantasy novel The Hobbit, but eventually developed
            into a much larger work.
          </p>
          <div className="statistics">
            <p className="views">
              <img src={ViewsIcon} alt="Views Icon" /> 12,434,934
            </p>
            <p className="likes">
              <img src={HeartIcon} alt="Heart Icon" /> 6,563
            </p>
            <p className="comments">
              <img src={CommentIcon} alt="Comment Icon" /> 831
            </p>
          </div>
          <div className="profile-section">
            <div className="profile-img"></div>
            <div className="profile-info">
              <p className="profile-name">Sara Jameson</p>
              <p className="profile-followers">12,353 followers</p>
            </div>
            <div className="follow-button">+ Follow</div>
            <div className="upload-date">
              <p className="uploaded">Uploaded:</p>
              <p>8 March, 2007</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar-heading">
          <p>Related videos</p>
        </div>
        <div className="related-videos">
          <RelatedVideo
            length="2:41"
            title="The Lord of the Rings - Best Scene of the movie (HD)"
            views="8,204,301"
          />
          <RelatedVideo
            length="4:38"
            title="LOTR: The Two Towers - The Battle of the Hornburg"
            views="2,857,112"
          />
          <RelatedVideo
            length="6:38"
            title="Lord of The Rings - Battle of Helms Deep Opening"
            views="3,642,730"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
