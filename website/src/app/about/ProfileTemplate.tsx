import Image from "next/image";
import React from "react";

interface ProfileTemplateProps {
  name: string;
  image: string;
  basicInfo: string;
  history: string[];
}

export const ProfileTemplate = (props: ProfileTemplateProps) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <div className="flex">
        <Image src={props.image} width={100} height={100} alt="" style={{ width: "30vw", height: "auto" }} />
        <h2>{props.basicInfo}</h2>
      </div>
      {props.history.map((line, index) => (<h1 key={index}>{line}</h1>))}
    </div>
  )
}

export default ProfileTemplate;