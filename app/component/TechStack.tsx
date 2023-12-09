import Image from 'next/image';

const TechStack = () => {
  const techStackItems = [
    { src: '/techstack/logo-salesforce.svg', alt: 'Salesforce' },
    { src: '/techstack/python.svg', alt: 'Python' },
    { src: '/techstack/javascript-logo.svg', alt: 'JavaScript' },
    { src: '/techstack/aws-logo.svg', alt: 'Amazon Web Services' },
    { src: '/techstack/logo-shopify-white.svg', alt: 'Shopify' },
    { src: '/techstack/azure.svg', alt: 'Azure' },
    { src: '/techstack/logo-react.svg', alt: 'React' },
    { src: '/techstack/django-logo-positive.svg', alt: 'Django' },
    { src: '/techstack/flask.svg', alt: 'Flask' },
    { src: '/techstack/next-js.svg', alt: 'Next.js' },
  ];

  const commonImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // or 'cover' based on your preference
  };

  return (
    <div className="my-8 px-6">
      <h2 className="text-2xl text-center font-bold mb-4">
        We work with some pretty amazing tools
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {techStackItems.map((item, index) => (
          <div key={index} className="group overflow-hidden flex justify-center items-center">
            <Image
              priority
              src={item.src}
              height={0}
              width={0}
              style={{ width: '60%', height: '50%', objectFit: 'contain'}}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
