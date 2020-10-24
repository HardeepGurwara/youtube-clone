import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="//yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="815k"
        noOfVideos={479}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      />
      <hr />

      <VideoRow
        views="2M"
        subs="910k"
        description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet 🌎 👇 "
        title="How to Earn $1,000 as a Freelance Developer in 30 days (Part 2)"
        timestamp="2hrs ago"
        channel="Clever Programmer"
        image="https://i.ytimg.com/vi/DFzP6gA0tkQ/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDf3CX-apGeRAaT6fLuy-HeM2FjqQ"
      />
      <VideoRow
        views="2M"
        subs="910k"
        description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet 🌎 👇 "
        title="How to Earn $1,000 as a Freelance Developer in 30 days (Part 2)"
        timestamp="2hrs ago"
        channel="Clever Programmer"
        image="https://i.ytimg.com/vi/DFzP6gA0tkQ/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDf3CX-apGeRAaT6fLuy-HeM2FjqQ"
      />
      <VideoRow
        views="2M"
        subs="910k"
        description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet 🌎 👇 "
        title="How to Earn $1,000 as a Freelance Developer in 30 days (Part 2)"
        timestamp="2hrs ago"
        channel="Clever Programmer"
        image="https://i.ytimg.com/vi/DFzP6gA0tkQ/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDf3CX-apGeRAaT6fLuy-HeM2FjqQ"
      />
      <VideoRow
        views="2M"
        subs="910k"
        description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet 🌎 👇 "
        title="How to Earn $1,000 as a Freelance Developer in 30 days (Part 2)"
        timestamp="2hrs ago"
        channel="Clever Programmer"
        image="https://i.ytimg.com/vi/DFzP6gA0tkQ/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDf3CX-apGeRAaT6fLuy-HeM2FjqQ"
      />
    </div>
  );
}

export default SearchPage;
