import React from 'react';

const ExternalResources = ({theme}) => {
  return (
    <div className="mt-8 mx-4">
     
      <div className={`p-4  ${theme==="dark"?("bg-gray-900 text-gray-100   border-gray-500"):("bg-slate-100 text-gray-800 border-blue-500")}`}>
        <h4 className="text-lg font-semibold bg-gray-600 text-gray-100">Have taken ideas & reused components from the following resources:</h4>
        <ul>
          <li className="mt-3">
            <a className="flex items-center " href="https://tailwindcomponents.com/component/sidebar-navigation-1" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform transition-transform duration-500 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="inline-flex pl-2">Sidebar Navigation</span>
            </a>
          </li>
          <li className="mt-2">
            <a className="flex items-center" href="https://tailwindcomponents.com/component/contact-form-1" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform transition-transform duration-500 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="inline-flex pl-2">Contact Form</span>
            </a>
          </li>
          <li className="mt-2">
            <a className="flex items-center" href="https://tailwindcomponents.com/component/trello-panel-clone" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform transition-transform duration-500 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="inline-flex pl-2">Section: Task Summaries</span>
            </a>
          </li>
          <li className="mt-2">
            <a className="flex items-center " href="https://windmill-dashboard.vercel.app/" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform transition-transform duration-500 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="inline-flex pl-2">Section: Client Table</span>
            </a>
          </li>
          <li className="mt-2">
            <a className="flex items-center " href="https://demos.creative-tim.com/notus-js/pages/admin/dashboard.html" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform transition-transform duration-500 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="inline-flex pl-2">Section: Social Traffic</span>
            </a>
          </li>
          <li className="mt-2">
            <a className="flex items-center " href="https://mosaic.cruip.com" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform transition-transform duration-500 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="inline-flex pl-2">Section: Recent Activities</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExternalResources;
