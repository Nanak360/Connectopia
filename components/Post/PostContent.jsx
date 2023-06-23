import Image from "next/image";
import React from "react";

const PostContent = ({ photos, content }) => {
  return (
    <div>
      <p className="my-3 text-xl">{content}</p>
      {photos?.length > 0 && (
        <div className="flex flex-wrap gap-4 ">
          {photos.map((photo) => (
            <Image
              key={photo}
              height={390}
              width={390}
              className="rounded-md object-cover"
              alt={photo}
              style={{ objectFit: "cover" }}
              src={photo}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostContent;
