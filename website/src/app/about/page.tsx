import ProfileTemplate from "./ProfileTemplate";

export const About = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p className="mt-4">
        This is the About page of the website.
      </p>
      <ProfileTemplate
        name={"menberA"}
        image="file.svg"
        basicInfo="AAAAAAAAAAAAA"
        history={[
          "aaaaaaaaaaaaaaaaaa",
          "bbbbbbbbbbbbbbbbbb",
          "vccccccccccccccccc"
        ]}
      />
    </div>
  );
};

// Next.jsが認識できるようにdefaultエクスポートを追加
export default About;