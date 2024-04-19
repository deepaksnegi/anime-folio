import React from "react";

type Props = {
  src: string;
};

const Video = (props: Props) => {
  const { src } = props;

  return (
    <iframe
      className="h-full w-full rounded-lg"
      loading="lazy"
      src={src}
      allowFullScreen
    />
  );
};

export default Video;
