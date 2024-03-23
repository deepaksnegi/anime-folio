import React from "react";

type Props = {
  src: string;
};

const Video = (props: Props) => {
  const { src } = props;

  return (
    <iframe
      width="420"
      height="315"
      className="rounded-lg"
      loading="lazy"
      src={src}
    />
  );
};

export default Video;
