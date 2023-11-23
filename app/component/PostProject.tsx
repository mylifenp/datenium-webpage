// components/PostProject.jsx
import React, { FormEvent, useState } from 'react';

const PostProject = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(''); // default to empty string
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    console.log({
      firstName,
      lastName,
      phone,
      email,
      service,
      subject,
      message,
    });
  
    // Reset all form fields
    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setService('');
    setSubject('');
    setMessage('');
  };
  

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 mt-10 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Post a Project</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input
            type="text"
            placeholder="First"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Choose your Service:
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="" disabled>Select a service</option>
            <option value="WEBSITE DEVELOPMENT">WEBSITE DEVELOPMENT</option>
            <option value="MOBILE APPLICATION DEVELOPMENT">MOBILE APPLICATION DEVELOPMENT</option>
            <option value="BROCHURE DESIGN">BROCHURE DESIGN</option>
            <option value="LOGO DESIGN">LOGO DESIGN</option>
            <option value="SOCIAL MEDIA MARKETING">SOCIAL MEDIA MARKETING</option>
            <option value="SEO">SEO</option>
            <option value="OTHERS">OTHERS</option>
          </select>
        </label>

        <label>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </label>

        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default PostProject;
