import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import Table from './Table'

const Layout = () => {
  return (
    <div className='flex flex-row bg-white h-screen w-screen overflow-hidden'>
      <SideBar/>
      <div className='p-4 flex-1'>
          <Header/>
          <Table/>
      </div>
    </div>
  )
}

export default Layout
