import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {
  AiOutlineLeft,
  AiOutlinePauseCircle,
  AiOutlineFastBackward,
  AiOutlineFastForward,
} from 'react-icons/ai';

const Music = () => {
  const [sliderValue, setSliderValue] = React.useState(3.5);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-200 p-5 sm:min-h-screen sm:flex-row sm:overflow-y-auto w-full max-w-4xl mx-auto font-sans">
      <div className="w-full flex flex-row items-center mb-5">
        <AiOutlineLeft size={24} className="ml-5" />
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-auto">Now Playing</h3>
      </div>

      <div className="flex flex-col items-center justify-center mb-5">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">#02 - Practice</h3>
        <p className="text-gray-600 mt-1 text-center">Digital Marketing - By Setup Cast</p>
      </div>

      <div className="flex items-center w-full mb-5 px-5">
        <span className="text-gray-600">4:10</span>
        <Slider
          className="mx-2 flex-grow"
          min={0}
          max={12.02}
          step={0.01}
          value={sliderValue}
          onChange={handleSliderChange}
          trackStyle={{ backgroundColor: '#e75480' }}
          railStyle={{ backgroundColor: '#d3d3d3' }}
          handleStyle={{ borderColor: '#e75480', backgroundColor: '#e75480' }}
        />
        <span className="text-gray-600">12:02</span>
      </div>

      <div className="flex justify-around w-full mb-5 px-5">
        <AiOutlineFastBackward size={24} className="text-pink-500" />
        <AiOutlinePauseCircle size={50} className="text-pink-500" />
        <AiOutlineFastForward size={24} className="text-pink-500" />
      </div>

      <div className="w-full px-5">
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mt-5 mb-2">Recently Played</h3>
        <div className="bg-pink-100 flex flex-col sm:flex-row justify-between rounded-lg p-3">
          <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
            <div className="ml-3 w-full">
              <p className="text-sm">#01 - Start With SEO</p>
              <p className="text-gray-600 mt-1">By Setup Cast - 15:35</p>
            </div>
          </div>
          <div className="relative w-12 h-12">
            <div className="absolute w-full h-full rounded-full bg-white shadow-inner inset-0 flex justify-center items-center">
              <div className="w-1/2 h-1/2 bg-white rounded-full flex justify-center items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
