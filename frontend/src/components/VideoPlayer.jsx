import React from "react";

import YouTube from "react-youtube";

const VideoPlayer = (props) => {
  return (
    <>
      <div>{props.title}</div>
      <YouTube videoId={props.link} />
    </>
  );
};

export default VideoPlayer;
