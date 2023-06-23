"use client";
import Avatar from "@components/Avatar";
import Card from "@components/Card";
import HorizontalIconsPanel from "@components/HorizontalIconsPanel";
import React, { useState, useContext } from "react";
import { Send } from "react-feather";
import { createPostOptions } from "@constants";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { UserContext } from "@contexts/UserContext";
import Image from "next/image";
import { ClipLoader } from "react-spinners";

const PostFormCard = ({ userId, setPostsSinceLogin }) => {
  const supabase = createClientComponentClient();
  const [content, setContent] = useState("");
  const [uploads, setUploads] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const { user } = useContext(UserContext);
  const createPost = async () => {
    if (user.id)
      await supabase
        .from("posts")
        .insert({
          author: user.id,
          content,
          photos: uploads,
        })
        .then(({ data, error }) => {
          if (!error) {
            setContent("");
            setUploads([]);
            setPostsSinceLogin((pre) => pre + 1);
          }
        });
  };

  const uploadPhotos = async (event) => {
    const files = event.target.files;
    if (files.length) {
      setIsUploading(true);
      for (const file of files) {
        const newFileName = Date.now() + file.name;
        const { data } = await supabase.storage
          .from("photos")
          .upload(newFileName, file);

        if (data) {
          const url =
            process.env.NEXT_PUBLIC_SUPABASE_URL +
            "/storage/v1/object/public/photos/" +
            data.path;
          setUploads((pre) => [...pre, url]);
        }
      }
      setIsUploading(false);
    }
  };
  return (
    <Card>
      <div className="flex gap-4">
        <Avatar></Avatar>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="grow mt-1 bg-transparent"
          placeholder={`What's on your mind?`}
        />
      </div>
      {isUploading && (
        <div className="m-4 w-full text-center">
          <ClipLoader color="#00ADB5" />
        </div>
      )}
      {uploads.length > 0 && (
        <div className="m-4 flex flex-wrap gap-2">
          {uploads.map((upload) => (
            <Image
              height={175}
              width={175}
              className="rounded-md object-cover"
              src={upload}
              key={upload}
              alt={upload}
              quality={100}
            ></Image>
          ))}
        </div>
      )}
      <div className="flex items-center justify-between mt-2">
        <HorizontalIconsPanel
          uploadPhotos={uploadPhotos}
          options={createPostOptions}
          isButton={true}
        />
        <button
          onClick={createPost}
          className="flex items-center gap-1 bg-socialBlue300 hover:bg-socialBlue400 rounded-3xl px-6 py-2 text-sm place-self-end"
        >
          <Send size={16} />
          Share
        </button>
      </div>
    </Card>
  );
};

export default PostFormCard;
