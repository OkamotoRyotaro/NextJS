import Image from "next/image";
import React from "react";

interface ProfileTemplateProps {
  name: string;
  image: string;
  basicInfo: string;
  history: string;
}

export const ProfileTemplate = (props: ProfileTemplateProps) => {
  return (
    <div>
      <h1 className="text-4xl">{props.name}</h1>
      <div className="flex">
        <Image
          src={props.image}
          width={100}
          height={100}
          alt=""
          style={{ width: "30vw", height: "auto" }}
          className="m-2"
        />
        <pre className="text-2xl whitespace-pre-wrap">{props.basicInfo}</pre>
      </div>
      <pre className="text-2xl whitespace-pre-wrap">
        {props.history}
      </pre>
    </div>
  )
}

export default ProfileTemplate;