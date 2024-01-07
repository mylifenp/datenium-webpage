import React, { ReactNode } from 'react';

interface FAQItemProps {
    question: string;
    answer: string | ReactNode;
  }

const faqData: FAQItemProps[] = [
    {
      question: "What guarantees do you provide for your services?",
      answer: (
        <>
          <p>All business we take up carry the following guarantees:</p>
          <ul className="list-disc ml-6">
            <li>Privacy Guarantee: All client details will be kept confidential.</li>
            <li>Price Guarantee: Minimum half cost-saving over on-site development.</li>
            <li>Result Guarantee: Progress-linked instalments weighted at the end.</li>
          </ul>
        </>
      ),
    },
    {
        question: "Can you guarantee time-bound results?",
        answer: "Yes, code paper agrees to deliver your project within a predetermined due date."
    },
    {
        question: "We are stressed over quality; how would you guarantee the quality?",
        answer: "Our designers are committed to delivering good quality code. We have formal procedures to keep quality under tight control. Every project goes through the hands of appropriate QA/Testing experts, underserve test plans including black-box testing, white-box testing, test regression, usage analysis etc."
    },
    {
        question: "Will you provide a developer that dedicated only to me?",
        answer: "Yes, that developer will work full-time (8Hours a day, 6 days a week) dedicating it only to you."
    },
    {
        question: "Do you provide technical support and maintenance?",
        answer: "Yes, we provide technical and maintenance services on request."
    },
    {
        question: "Would you replace my developer if I am not satisfied?",
        answer: "Yes, we will positively replace your developer if we see that there is a deficiency on the developer’s end."
    },
    {
        question: "Will my hired developers speak English?",
        answer: "Yes, all our developers are speaking English fluently."
    },
    {
        question: "Can I contact the appropriate parties working on our project? If so can I communicate via phone?",
        answer: "Sure, We would suggest that you interact primarily with the team leader to minimize miscommunications with your team. We are alright with correspondence through telephone, E-mail, or skype."
    }
    
  ];


const FAQPage: React.FC = () => {
  return (
    <div className="w-full space-y-4">
        <div className="flex items-center justify-center h-40 bg-slate-300 my-10 ">
            <div className='text-3xl font-bold mb-4 text-center'> Frequently Asked Questions</div>
        </div>
        {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
  );
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <details className="group group md:mx-20 lg:mx-40 mx-4">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-slate-300 p-4 text-gray-900">
        <h2 className="font-medium">{question}</h2>
        <svg
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>

      <p className="mt-4 px-4 leading-relaxed text-gray-700">{answer}</p>
    </details>
  );
};

export default FAQPage;
