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
    <div className="overflow-x-hidden">
      <h1 className="text-4xl">{props.name}</h1>
      <div className="flex flex-col md:flex-row">
        <Image
          src={props.image}
          width={100}
          height={100}
          alt=""
          style={{ width: "30vw", height: "auto" }}
          className="m-2 w-full md:w-1/3"
        />
        <pre
          className="whitespace-pre-wrap"
        >
          {props.basicInfo}
        </pre>
      </div>
      <pre className="whitespace-pre-wrap">
        {props.history}
      </pre>
    </div>
  )
}

export default ProfileTemplate;