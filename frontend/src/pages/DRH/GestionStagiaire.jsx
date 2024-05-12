import React from 'react'
import Header from '../../components/DRH/Header'
import SideBar from '../../components/DRH/SideBar'
import Table2 from '../../components/DRH/Table2'

const GestionStagiaire = () => {
  return (
    <div className='flex flex-row bg-white h-screen w-screen overflow-hidden'>
      <SideBar/>
      <div className='p-4 flex-1'>
          <Header title='Liste des stagiaires' placeholder='Liste des stagiaires'/>
          <Table2/>
      </div>
    </div>
  )
}

export default GestionStagiaire
