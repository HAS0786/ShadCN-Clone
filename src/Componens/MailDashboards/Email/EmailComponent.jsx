import React from 'react';
import MailSidebar from './MailSidebar';
import Statistics from './Statistics';
import TaskSummaries from './TaskSummaries';
import ExternalResources from './ExternalResources';
import RecentActivities from './RecentActivities';
import ContactForm from './ContactForm';


function EmailComponent({theme}) {
  return (
   
    <div className="flex min-h-screen  border-2 border-gray-500">
      {/* Sidebar */}
      <div className="md:col-span-1">
        <div className="relative top-8 scroll-m-1">
          <MailSidebar theme={theme} />
        </div>
      </div>

      {/* Main Content */}
      <div className="md:col-span-3 p-4 ">
        <Statistics theme={theme}/>
        <TaskSummaries theme={theme}/>
        <ExternalResources theme={theme} />
        <RecentActivities theme={theme}/>
        <ContactForm theme={theme} />
        {/* Add other components as needed */}
      </div>
    </div>
  );
}

export default EmailComponent;
