import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <Head>
        <title>About Us | Datenium</title>
        <meta
          name="description"
          content="Learn more about Datenium - Your AI Solution Partner"
        />
      </Head>

      <h1 className="text-3xl font-bold mb-4">About Datenium</h1>

      <p className="mb-4">
        Datenium is a leading-edge software company dedicated to revolutionizing
        industries through the power of artificial intelligence. We specialize
        in crafting intelligent solutions that empower businesses to thrive in
        the digital era.
      </p>

      <p className="mb-4">
        At Datenium, we believe in the synergy of data and AI, and our team of
        passionate professionals works tirelessly to create innovative
        applications that transform data into actionable insights. Our
        commitment to excellence and technological prowess sets us apart in the
        competitive landscape.
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

      <h2 className="text-xl font-bold">Office Locations</h2>

      <div className="flex justify-left">
        <div className="p-2">
          <h3 className="text-lg font-bold mb-2">Canada</h3>
          <Image
            priority
            src="/Canada-flags.svg"
            height={180}
            width={180}
            alt="Canada"
          />
          <p>Phone: +1 514-123-3456</p>
        </div>
        <div className="p-2">
          <h3 className="text-lg font-bold mb-2">Germany</h3>
          <Image
            priority
            src="/Germany-flags.svg"
            height={150}
            width={150}
            alt="Canada"
          />
          <p>Phone: +49 123 456 789</p>
        </div>
      </div>
    </div>
  );
};

export default About;
