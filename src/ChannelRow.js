import { Avatar } from "@material-ui/core";
import React from "react";
import "./ChannelRow.css";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__avatar" alt={channel} src={image} />
      <div className="channelRow__info">
        <h4>
          {channel} {verified && <CheckCircleOutlinedIcon />}
        </h4>
        <p>
          {subs} subscribers - {noOfVideos} Videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
