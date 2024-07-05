import React, { useState } from 'react';

const sampleQuestions = {
  question1: { summary: 'the capital of Canada?', answer: 'Ottawa baby!!' },
  question2: { summary: 'the life span of a bowhead whale?', answer: 'Over 200 years!!' },
  question3: { summary: 'the most visited city in the world?', answer: 'London, groovy baby!!' },
  question4: { summary: 'the warmest ocean?', answer: 'Indian Ocean, it\'s a hottie!' },
  question5: { summary: 'the one thing Ron Swanson hates more than lying?', answer: 'Skim milk, which is water that\'s lying about being milk' }
};

const AccordionItem = ({ details,theme }) => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <div className={`border-b border-gray-900 ${theme==="dark"?("bg-gray-900 text-gray-100"):("bg-gray-100 text-gray-800")}`}>
      <div className="summary cursor-pointer flex items-center justify-between py-4 px-6 hover:bg-gray-100" onClick={toggle}>
        <span className="text-lg font-semibold">{details.summary}</span>
        <span className="text-lg">{active ? '-' : '+'}</span>
      </div>
      {active && (
        <div className="accordion-content py-4 px-6">
          <p>{details.answer}</p>
        </div>
      )}
    </div>
  );
};

 const Cards = ({theme}) => {
  return (
    <div className={`min-h-screen flex flex-col m-2 border-2 border-gray-600 items-center justify-center p-4" ${theme==="dark"?("bg-gray-900 text-gray-100"):("bg-gray-100 text-gray-800")}`}>
      <img
      className="mt-4 mb-2 rounded-lg sm:mx-auto max-w-full h-auto"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRx3r3KMSXE-csgqBQEfdiXc85SSuriU_u_w&s"
      alt=""
    />
      <h1 className=" text-4xl uppercase font-serif mb-12">What is...</h1>
      <div className={`w-full sm:w-2/3 lg:w-1/2 rounded-lg shadow-lg ${theme==="dark"?("bg-gray-900 text-gray-100"):("bg-gray-100 text-gray-800")}`}>
        {Object.keys(sampleQuestions).map((key) => (
          <AccordionItem key={key} details={sampleQuestions[key]} />
        ))}
      </div>
    </div>
  );
};
export default Cards


