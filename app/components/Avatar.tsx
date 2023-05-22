"use client";

import React from "react";
import Image from "next/image";

interface AvatarProps {
  imgSrc: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ imgSrc }) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={imgSrc || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
