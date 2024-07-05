import React from 'react';

const Statistics = ({theme}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
      {/* Social Traffic */}
      <div className={`relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full shadow-lg rounded ${theme==="dark"?("bg-gray-900 text-gray-100"):("bg-slate-100 text-gray-800")}`}>
        <div className="rounded-t mb-0 px-0 border-0">
          <div className="flex flex-wrap items-center px-4 py-2">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base ">Social Traffic</h3>
            </div>
            <div className="relative w-full max-w-full flex-grow flex-1 text-right">
              <button className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                See all
              </button>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Referral
                  </th>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Visitors
                  </th>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Facebook</th>
                  <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">5,480</td>
                  <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">70%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                          <div style={{ width: '70%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr >
                  <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Twitter</th>
                  <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">3,380</td>
                  <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">40%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                          <div style={{ width: '40%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr >
                  <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Instagram</th>
                  <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">4,105</td>
                  <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">45%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                          <div style={{ width: '45%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr >
                  <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Google</th>
                  <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">4,985</td>
                  <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">60%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                          <div style={{ width: '60%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr >
                  <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Linkedin</th>
                  <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">2,250</td>
                  <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">30%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                          <div style={{ width: '30%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* ./Social Traffic */}

      {/* Recent Activities */}
      <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded">
        <div className="rounded-t mb-0 px-0 border-0">
          <div className="flex flex-wrap items-center px-4 py-2">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Recent Activities</h3>
            </div>
            <div className="relative w-full max-w-full flex-grow flex-1 text-right">
              <button className="bg-blue-500 active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                See all
              </button>
            </div>
          </div>
          <div className="block w-full">
            <div className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Today
            </div>
            <ul className="my-1">
              <li className="flex px-4">
                <div className="w-9 h-9 rounded-full flex-shrink-0 my-2 mr-3">
                  <svg className="w-9 h-9 fill-current" viewBox="0 0 36 36">
                    <path d="M18 6a12 12 0 110 24 12 12 0 010-24m0-4a16 16 0 100 32A16 16 0 0018 2z"></path>
                    <path d="M23 11h-6a1 1 0 000 2h5v7h-4a1 1 0 100 2h4v2a1 1 0 002 0V12a1 1 0 00-1-1z"></path>
                  </svg>
                </div>
                <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-600 text-sm  py-2">
                  <div className="flex-grow flex justify-between items-center">
                    <div className="self-center">
                      <a className="font-medium  hover:text-gray-900 dark:hover:text-gray-100" href="#!">
                        Lunch meeting
                      </a> with
                      <a className="font-medium  hover:text-gray-900 dark:hover:text-gray-100" href="#!">
                        #Debra
                      </a> at <a className="font-medium hover:text-gray-900 dark:hover:text-gray-100" href="#!">Cafe Bistro</a>
                    </div>
                    <div className="flex-shrink-0 ml-2">
                      <a href="#!" className="flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-gray-50 rounded-md p-1 w-5 h-5 ml-auto text-xs font-bold leading-none">
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex px-4">
                <div className="w-9 h-9 rounded-full flex-shrink-0 bg-gray-300 my-2 mr-3">
                  <svg className="w-9 h-9 fill-current text-gray-600" viewBox="0 0 36 36">
                    <path d="M18 6a12 12 0 110 24 12 12 0 010-24m0-4a16 16 0 100 32A16 16 0 0018 2z"></path>
                    <path d="M23 11h-6a1 1 0 000 2h5v7h-4a1 1 0 100 2h4v2a1 1 0 002 0V12a1 1 0 00-1-1z"></path>
                  </svg>
                </div>
                <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-600 text-sm t py-2">
                  <div className="flex-grow flex justify-between items-center">
                    <div className="self-center">
                      <a className="font-medium  hover:text-gray-900 dark:hover:text-gray-100" href="#!">
                        Meeting
                      </a> with
                      <a className="font-medium  hover:text-gray-900 dark:hover:text-gray-100" href="#!">
                        #Team
                      </a>
                    </div>
                    <div className="flex-shrink-0 ml-2">
                      <a href="#!" className="flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-gray-50 rounded-md p-1 w-5 h-5 ml-auto text-xs font-bold leading-none">
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex px-4">
                <div className="w-9 h-9 rounded-full flex-shrink-0 bg-gray-300 my-2 mr-3">
                  <svg className="w-9 h-9 fill-current text-gray-600" viewBox="0 0 36 36">
                    <path d="M18 6a12 12 0 110 24 12 12 0 010-24m0-4a16 16 0 100 32A16 16 0 0018 2z"></path>
                    <path d="M23 11h-6a1 1 0 000 2h5v7h-4a1 1 0 100 2h4v2a1 1 0 002 0V12a1 1 0 00-1-1z"></path>
                  </svg>
                </div>
                <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-600 text-sm py-2">
                  <div className="flex-grow flex justify-between items-center">
                    <div className="self-center">
                      <a className="font-medium  hover:text-gray-900  dark:hover:text-gray-100" href="#!">
                        Dinner with
                      </a>
                      <a className="font-medium t hover:text-gray-900 dark:hover:text-gray-100" href="#!">
                        #Michael
                      </a> at <a className="font-medium hover:text-gray-900 dark:hover:text-gray-100" href="#!">Downtown</a>
                    </div>
                    <div className="flex-shrink-0 ml-2">
                      <a href="#!" className="flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-gray-50 rounded-md p-1 w-5 h-5 ml-auto text-xs font-bold leading-none">
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ./Recent Activities */}
    </div>
  );
};

export default Statistics;
