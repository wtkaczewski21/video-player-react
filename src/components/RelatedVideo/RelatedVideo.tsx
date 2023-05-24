import React from "react";
import ViewsIcon from "../../assets/views-icon.png";
import "./RelatedVideo.css";

type VideoProps = {
  length: string;
  title: string;
  views: string;
};

function RelatedVideo(props: VideoProps) {
  return (
    <div className="related-video">
      <div className="thumbnail">
        <div className="video-length">{props.length}</div>
      </div>
      <p className="related-title">{props.title}</p>
      <p className="related-views">
        <img src={ViewsIcon} alt="Views Icon" />
        {props.views}
      </p>
    </div>
  );
}

export default RelatedVideo;
