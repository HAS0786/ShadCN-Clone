import React from 'react';

const Dashboard = ({theme}) => {
  return (
    <div className={`${theme==="dark"?("bg-gray-800 text-gray-700"):("bg-slate-100 text-gray-800")}`} >
      {/* First Row Containing the Stats Card */}
      <div className="flex flex-wrap justify-center py-10 px-5">
        {/* First Stats Container */}
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div className="h-20 bg-red-400 flex items-center justify-between">
              <p className="text-white text-lg pl-5">BT SUBSCRIBERS</p>
            </div>
            <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p className="py-4 text-3xl ml-5">20,456</p>
          </div>
        </div>
        {/* Second Stats Container */}
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div className="h-20 bg-blue-500 flex items-center justify-between">
              <p className="text-white text-lg pl-5">BT ACTIVE SUBSCRIBERS</p>
            </div>
            <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p className="py-4 text-3xl ml-5">19,694</p>
          </div>
        </div>
        {/* Third Stats Container */}
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div className="h-20 bg-purple-400 flex items-center justify-between">
              <p className="text-white text-lg pl-5">BT OPT OUTS</p>
            </div>
            <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p className="py-4 text-3xl ml-5">711</p>
          </div>
        </div>
        {/* Fourth Stats Container */}
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div className="h-20 bg-purple-900 flex items-center justify-between">
              <p className="text-white text-lg pl-5">BT TODAY'S SUBSCRIPTION</p>
            </div>
            <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p className="py-4 text-3xl ml-5">0</p>
          </div>
        </div>
      </div>
      {/* Second Row Containing the Table Stats */}
      <div className="flex flex-wrap justify-center py-10 px-5">
        {/* First Table */}
        <div className="w-full lg:w-1/3 p-4">
          <div className="bg-white shadow-xl rounded-sm overflow-hidden">
            <div className="w-11/12 mx-auto">
              <div className="bg-white my-6">
                <table className="text-left w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">KEYWORDS</th>
                      <th className="py-4 px-6 text-center bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">TOTAL ENTRIES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-4 px-6 border-b border-grey-light">Bible</td>
                      <td className="py-4 px-6 text-center border-b border-grey-light">11980</td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                      <td className="py-4 px-6 text-center border-b border-grey-light">340</td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                      <td className="py-4 px-6 text-center border-b border-grey-light">901</td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                      <td className="py-4 px-6 text-center border-b border-grey-light">11950</td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                      <td className="py-4 px-6 text-center border-b border-grey-light">459</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Second Table */}
        <div className="w-full lg:w-1/3 p-4">
          <div className="bg-white shadow-xl rounded-sm overflow-hidden">
            <div className="w-11/12 mx-auto">
              <div className="bg-white my-6">
                <table className="text-left w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">MSISDN</th>
                      <th className="py-4 px-6 text-center bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">ENTRIES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-4 px-6 border-b border-grey-light">26809304030</td>
                      <td className="py-4 px-6 text-center border-b border-grey-light">495,455</td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-4 px-6 border-b border-grey-light">26809304030</td>
                      <td className="py-4 px-6 text-center border-b border-grey-light">495,455</td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-4 px-6 border-b border-grey-light">26809304030</td>
                      <td className="py-4 px-6 text-center border-b border-grey-light">495,455</td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-4 px-6 border-b border-grey-light">26809304030</td>
                      <td className="py-4 px-6 text-center border-b border-grey-light">32,333</td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-4 px-6 border-b border-grey-light">26809304030</td>
                      <td className="py-4 px-6 text-center border-b border-grey-light">31,199</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Third Table */}
        <div className="w-full lg:w-1/3 p-4">
          <div className="bg-white shadow-xl rounded-sm overflow-hidden">
            <div className="w-11/12 mx-auto">
              <div className="bg-white my-6">
                <table className="text-left w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">MSISDN</th>
                      <th className="py-4 px-6 text-center bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">POINTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-4 px-6 border-b border-grey-light">28679609009</td>
                      <td className="py-4 text-center px-6 border-b border-grey-light">11,290</td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-4 px-6 border-b border-grey-light">28679609009</td>
                      <td className="py-4 text-center px-6 border-b border-grey-light">9,230</td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-4 px-6 border-b border-grey-light">28679609009</td>
                      <td className="py-4 px-6 text-center border-b border-grey-light">234</td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-4 px-6 border-b border-grey-light">28679609009</td>
                      <td className="py-4 px-6 text-center border-b border-grey-light">56,230</td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-4 px-6 border-b border-grey-light">28679609009</td>
                      <td className="py-4 px-6 text-center border-b border-grey-light">323</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
