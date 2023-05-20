import React from "react";

const PostContent = ({ imgLink, content }) => {
  return (
    <div>
      <p className="my-3 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt aut
        quia earum, libero aperiam a maiores! Sapiente officia minus facere
        atque, modi earum quas pariatur error illum beatae sit magnam!
      </p>
      {imgLink && (
        <div className="rounded-md overflow-hidden">
          <img src={imgLink} />
        </div>
      )}
    </div>
  );
};

export default PostContent;
