import React from "react";

interface Props {
  title: string;
  image_url: string;
}

const Figure: React.FC<Props> = ({ title, image_url }) => {
  return (
    <figure
      className="h-128 relative origin-top before:block before:h-full before:w-full 
    before:absolute before:top-0 before:left-0 before:bg-gradient-to-br from-from to-to 
    before:opacity-60"
    >
      <img
        className="w-full block h-full object-cover"
        src={image_url}
        alt={`${title} image`}
      />
      <h1
        className="absolute bottom-0 left-2/4 -translate-x-2/4 translate-y-1/4 -skew-y-6
       text-white uppercase w-2/4 text-center leading-loose font-bold text-xl"
      >
        <span
          className="box-decoration-clone py-5 px-8 
        bg-gradient-to-br from-from to-to"
        >
          {title}
        </span>
      </h1>
    </figure>
  );
};

export default Figure;
