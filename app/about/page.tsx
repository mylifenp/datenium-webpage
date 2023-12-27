import Head from "next/head";
import TeamPage from "../component/Teams";
import Locations from "../component/Offices";

const About = () => {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto p-8 ">
        <Head>
          <title>About Us | Datenium</title>
          <meta
            name="description"
            content="Learn more about Datenium - Your AI Solution Partner"
          />
        </Head>

        <h1 className="text-3xl font-bold mb-4 ">About Datenium</h1>

        <p className="mb-4">
          Datenium is a leading-edge software company dedicated to
          revolutionizing industries through the power of artificial
          intelligence. We specialize in crafting intelligent solutions that
          empower businesses to thrive in this modern digital era.
        </p>

        <p className="mb-4">
          At Datenium, we believe in the synergy of data and AI, and our team of
          passionate professionals works tirelessly to create innovative
          applications that transform data into actionable insights. Our
          commitment to excellence and technological prowess sets us apart in
          the competitive landscape.
        </p>

        <h2 className="text-xl font-bold mb-2">Dive Into Our Expertise</h2>

        <ul className=" list-disc ml-6 mb-4">
          <li>Artificial Intelligence</li>
          <li>Consulting</li>
          <li>Digital Solutions</li>
          <li>Cloud & DevOps</li>
          <li>Data Science</li>
          <li>Software Engineering</li>
        </ul>

        <TeamPage/>

       <Locations/>
      </div>
    </div>
  );
};

export default About;
