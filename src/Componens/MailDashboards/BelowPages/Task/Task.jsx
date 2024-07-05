import { useEffect, useState } from 'react';

const Task = ({theme}) => {
  const [skills, setSkills] = useState([
    { title: 'HTML', percent: '95' },
    { title: 'CSS', percent: '70' },
    { title: 'Tailwind CSS', percent: '90' },
    { title: 'JavaScript', percent: '70' },
    { title: 'Alpine JS', percent: '80' },
    { title: 'PHP', percent: '65' },
    { title: 'Laravel', percent: '75' },
  ]);

  const [currentSkill, setCurrentSkill] = useState({
    title: 'HTML',
    percent: '95',
    circumference: 0,
  });

  useEffect(() => {
    const circumference = 2 * Math.PI * 120; // Calculate circumference for SVG circle
    setCurrentSkill((prev) => ({ ...prev, circumference }));
  }, []);

  const handleSkillClick = (skill) => {
    setCurrentSkill((prev) => ({ ...skill, circumference: prev.circumference }));
  };

  return (
    <main className={`flex items-center justify-center w-full min-h-screen ${theme==="dark"?("bg-gray-900 text-gray-100"):("bg-gray-100 text-gray-900")}`}>
      
      <section className={`p-6 space-y-6 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y- ${theme==="dark"?("bg-gray-900 text-gray-100"):("bg-gray-100 text-gray-900")}`}>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
          {skills.map((skill, index) => (
            <button
              key={index}
              onClick={() => handleSkillClick(skill)}
              className={`px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-full hover:bg-blue-700 ${
                currentSkill.title === skill.title ? 'font-bold ring-2 ring-gray-100' : ''
              }`}
            >
              {skill.title}
            </button>
          ))}
        </div>

        <div className="relative flex items-center justify-center">
          <svg className="transform -rotate-90 w-72 h-72 sm:w-56 sm:h-56 md:w-72 md:h-72">
            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              className="text-gray-700"
            />
            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              strokeDasharray={currentSkill.circumference}
              strokeDashoffset={
                currentSkill.circumference -
                (parseInt(currentSkill.percent) / 100) * currentSkill.circumference
              }
              className="text-blue-500"
            />
          </svg>
          <span className="absolute text-3xl sm:text-4xl md:text-5xl">{`${currentSkill.percent}%`}</span>
        </div>
      </section>
    </main>
  );
};

export default Task;
