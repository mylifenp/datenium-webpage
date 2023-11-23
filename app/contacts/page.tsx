// pages/project-form.tsx
'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Checkbox from '../component/CheckBox';
import Services from '../component/Services';

interface FormData {
    name: string;
    email: string;
    phone: string;
    source: string;
    projectOrProblem: string;
}

interface Services {
    webDevelopment: boolean;
    softwareReengineering: boolean;
    mobileDevelopment: boolean;
    // Add other services as needed
}

const Contacts: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        source: '',
        projectOrProblem: '',
    });


    const [services, setServices] = useState<Services>({
        webDevelopment: false,
        softwareReengineering: false,
        mobileDevelopment: false,
        // Add other services as needed
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (service: keyof Services) => {
        setServices((prevServices) => ({
            ...prevServices,
            [service]: !prevServices[service],
        }));
    };


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // You can perform further actions with the form data here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className=" text-center  md:text-center p-6 ">
            <h2 className="text-l md:text-2xl font-bold my-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:min-h-screen lg:min-h-screen ">
                    <div className="flex flex-col">
                        <div className="text-left p-2 ">
                            <h1 className="text-2xl md:text-xl lg:text-2xl xl:text-6xl font-bold mb-6">
                                What would you like us to do?. We're always there to help you in growing your business.</h1>
                            <p className="text-base">
                                Achieve all your goals and get long-term value for your business with professional services from our highly qualified experienced developers and designers.</p>
                        </div>
                        <div className='mt-8 p-2'>
                            <div className="mb-4">
                                <input
                                    className="border border-gray-800 rounded w-full mb-2 py-2 px-3 text-black-700 placeholder-gray-800"
                                    type="text"
                                    name="name"
                                    placeholder="Name:"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="border border-gray-800 rounded w-full mb-2 py-2 px-3 text-black-700 placeholder-gray-800"
                                    type="email"
                                    name="email"
                                    placeholder="Email:"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="border border-gray-800 rounded w-full mb-2 py-2 px-3 text-black-700 placeholder-gray-800"
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone:"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="border border-gray-800 rounded w-full mb-2 py-2 px-3 text-black-700 placeholder-gray-800"
                                    type="text"
                                    name="source"
                                    placeholder="Where did you hear about us? (optional):"
                                    value={formData.source}
                                    onChange={handleChange}
                                />
                                <textarea
                                    className="border border-gray-800 rounded w-full mb-2 py-2 px-3 text-black-700 placeholder-gray-800"
                                    name="projectOrProblem"
                                    placeholder='Tell us about your project or problem:'
                                    value={formData.projectOrProblem}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-l md:text-2xl font-bold my-4'>What services are you interested in?*</div>
                        <Checkbox
                            label="Web Development"
                            isChecked={services.webDevelopment}
                            onChange={() => handleCheckboxChange('webDevelopment')}
                        />

                        <Checkbox
                            label="Software Re-engineering & Maintenance"
                            isChecked={services.softwareReengineering}
                            onChange={() => handleCheckboxChange('softwareReengineering')}
                        />

                        <Checkbox
                            label="Mobile Development"
                            isChecked={services.softwareReengineering}
                            onChange={() => handleCheckboxChange('softwareReengineering')}
                        />

                        <Checkbox
                            label="Quality Assurance"
                            isChecked={services.softwareReengineering}
                            onChange={() => handleCheckboxChange('softwareReengineering')}
                        />

                        <Checkbox
                            label="IT Consulting & Digital Advisory"
                            isChecked={services.softwareReengineering}
                            onChange={() => handleCheckboxChange('softwareReengineering')}
                        />
                        <Checkbox
                            label="IT Staffing & Recruitmente"
                            isChecked={services.softwareReengineering}
                            onChange={() => handleCheckboxChange('softwareReengineering')}
                        />
                        <Checkbox
                            label="Digital Product Design"
                            isChecked={services.softwareReengineering}
                            onChange={() => handleCheckboxChange('softwareReengineering')}
                        />
                        <Checkbox
                            label="Custom Software Development"
                            isChecked={services.softwareReengineering}
                            onChange={() => handleCheckboxChange('softwareReengineering')}
                        />
                        <Checkbox
                            label="Others"
                            isChecked={services.softwareReengineering}
                            onChange={() => handleCheckboxChange('softwareReengineering')}
                        />
                        <div className="flex justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white  mb-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </div>


    );
};

export default Contacts;
