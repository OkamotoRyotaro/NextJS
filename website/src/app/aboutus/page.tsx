import { fetchMenbers } from "@/hooks/useFetchMenbers";
import ProfileTemplate from "../../components/ProfileTemplate";

const About = async () => {

  const menbers = fetchMenbers();

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">About Us Page</h1>
      <p className="mt-4">This is the About page of the website.</p>
      {menbers.map((menber) => (
        <div key={menber.id} className="p-6">
          <ProfileTemplate
            name={menber.name}
            image={menber.imageURL}
            basicInfo={menber.basicInfo}
            history={menber.history}
          />
        </div>
      ))}
    </div>
  );
};

export default About;