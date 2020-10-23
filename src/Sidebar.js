import React from "react";
import "./Sidebar.css";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import RestoreIcon from "@material-ui/icons/Restore";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotOutlinedIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={RestoreIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
      <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
