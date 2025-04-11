import { fetchMenbers } from "@/hooks/useFetchMenbers";
import ProfileTemplate from "./ProfileTemplate";

const About = async () => {

  const menbers = fetchMenbers(["menberA.json", "menberB.json"]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p className="mt-4">This is the About page of the website.</p>
      {menbers.map((menber, index) => (
        <div className="border : 1">
          <ProfileTemplate
            key={index}
            name={menber.name}
            image={menber.imageURL}
            basicInfo={menber.basicInfo}
            history={menber.History}
          />
        </div>
      ))}
    </div>
  );
};

export default About;