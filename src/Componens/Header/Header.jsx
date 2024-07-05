import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiBoundingBoxLight } from "react-icons/pi";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PageList } from '../../../public/Pagelist';
import BelowHeader from '../BelowHeader/BelowHeader';

const Header = ({ theme }) => {

  return (
    <>
    <div className='flex justify-center items-center h-[70vh]'>
      <div className='text-center'>
        <div className='flex justify-center'>
          <button
            className={`flex justify-center items-center text-center rounded-lg p-1 mb-2 ${
              theme === "dark" ? "bg-gray-900" : "bg-slate-300"
            }`}
          >
            <span>
              <PiBoundingBoxLight size={20} />
            </span>
            <span className='ml-2 font-semibold mr-2'>
              Introducing Lift Mode
            </span>
            <span>
              <IoIosArrowRoundForward size={30} />
            </span>
          </button>
        </div>
        <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]'>
          Build Your Component Library
        </h1>
        <p className='text-center text-xl font-normal text-foreground'>
          Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
        </p>
        <div className='flex justify-center gap-3 mt-4'>
          <button className='bg-slate-100 text-gray-500 border-2 border-gray-500 hover:bg-slate-200 p-2 rounded-md'>
           <Link to={PageList.Docs}>
            Get Started
           </Link>
          </button>
          <button className='bg-transparent border-2 flex justify-center items-center text-center gap-1 border-gray-500 hover:bg-slate-500 p-2 rounded-md'>
            <FaGithubSquare size={20} />
            <a href="https://github.com/HAS0786?tab=repositories"> GitHub</a>
          </button>
        </div>
      </div>

    </div>
    <BelowHeader/>
    <hr />
    </>
  );
};

export default Header;
