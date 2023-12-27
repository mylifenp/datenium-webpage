// TeamPage.js

import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Founder & CEO',
    expertise: 'Web Development',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://placekitten.com/300/300', // Replace with the actual image URL
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO',
    expertise: 'Data Science',
    bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://placekitten.com/301/301', // Replace with the actual image URL
  },
  // Add more team members as needed
];

const TeamPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white p-4 rounded-md shadow-md">
            <img src={member.image} alt={member.name} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h2 className="text-xl font-bold mb-2">{member.name}</h2>
            <p className="text-gray-600 mb-2">{member.role}</p>
            <p className="text-gray-600 mb-4">{member.expertise}</p>
            <p className="text-gray-700">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
