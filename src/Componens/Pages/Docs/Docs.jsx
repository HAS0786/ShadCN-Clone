import React from 'react'
// import HeaderofDocs from './HeaderofDocs'
import SidebarofDocs from './SidebarofDocs'
import MainContentofDocs from './MainContentofDocs'

const Docs = ({theme}) => {
  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <SidebarofDocs theme={theme}/>

    {/* Main content */}
    <div className="flex-1 overflow-y-auto">
      {/* Header */}

      {/* Main content */}
      <MainContentofDocs theme={theme} />
    </div>
  </div>
  )
}

export default Docs