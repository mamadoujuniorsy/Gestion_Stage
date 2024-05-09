import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { IoPerson } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import logo from '../../assets/logo.jpg';
const SideBar = () => {
  return (
    <div className='bg-neutral-200 w-60 p-3 flex flex-col'>
        <img
          src={logo}
        />
        <div className='flex items-center gap-2 px-3 py-2 hover:bg-neutral-100'>
        <RxDashboard />
          <h1>Tableau de bord</h1>
        </div>
        <div className='flex items-center gap-2 px-3 py-2 hover:bg-neutral-100'>
          <IoPerson/>
          <h1>Gestion stagiaires</h1>
        </div>
        <div className='flex items-center gap-2 px-3 py-2 hover:bg-neutral-100'>
          <RiLogoutCircleRLine/>
          <h1>Déconnexion</h1>
        </div>
      </div>      
  )
}

export default SideBar
