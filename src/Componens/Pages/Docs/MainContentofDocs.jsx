import React from 'react';
import  ChartsofDocs  from './ChartsofDocs';
import Chart2ofDocs from './Chart2ofDocs';

const MainContentofDocs = ({theme}) => {
  return (
    <div className='2xlg:w-full'>
    <main className='2xlg:w-full  sm:ml-60 pt-16 pb-6 px-6'>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:border-yellow-300">
          Create Project
        </button>
      </div>

      {/* Project list */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className={` shadow-lg rounded-lg p-4 flex items-center ${theme==="dark"?("bg-gray-900 text-gray-100"):("bg-gray-100 text-g")}`}>
          {/* Replace with your SVG or icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-8 h-8 mr-2"
          >
            <path d="M12 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm1 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm1 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3-6h-2V2h2v2z" />
          </svg>
          <div className='h-full'>
            <h3 className="text-lg font-semibold">Project 1</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus iste accusantium error nesciunt? Ad incidunt amet, et quia unde enim excepturi at nam magnam numquam repellendus maiores atque accusantium!
            </p>
          </div>
        </div>

        {/* Add more project cards */}
        <div className={` shadow-lg rounded-lg p-4 flex items-center `}>          {/* Replace with your SVG or icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-8 h-8 mr-2"
          >
            <path d="M12 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm1 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm1 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3-6h-2V2h2v2z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold">Project 2</h3>
            <p className="text-sm text-gray-600">Dolor sit amet consectetur
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione reiciendis dolorum recusandae quidem nemo quo, nulla ullam quos aliquam beatae doloribus magni eum odit deleniti eius ea officiis veniam sapiente?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem reprehenderit, saepe fugit corrupti, ullam officia iure accusamus aspernatur deserunt excepturi modi similique? Veniam id velit nam accusantium et sed unde.
            
            </p>
          </div>

        </div>

        {/* Example of another project card */}
      </div>
        <ChartsofDocs/>
        <Chart2ofDocs/>
    </main>
    </div>
  );
};

export default MainContentofDocs;
