import { Avatar } from "@material-ui/core";
import React from "react";
import "./VideoCard.css";
function VideoCard({ title, views, channel, channelImage, timestamp, image }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} Views {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
