import React from "react";

const PostContent = ({ imgLink, content }) => {
  return (
    <div>
      <p className="my-3 text-xl">{content}</p>
      {imgLink && (
        <div className="rounded-md overflow-hidden">
          <img src={imgLink} />
        </div>
      )}
    </div>
  );
};

export default PostContent;
