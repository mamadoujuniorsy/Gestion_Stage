import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { IoPerson } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
const AdminSidebar = () => {
  return (
    <div className='bg-neutral-200 w-60 p-3 flex flex-col'>
        <img
          src={logo}
        />
        <div className='flex items-center gap-2 px-3 py-2 hover:bg-blue-400'>
        <RxDashboard />
          <Link to='/dashboard'>Tableau de bord</Link>
        </div>
        <div className='flex items-center gap-2 px-3 py-2 hover:bg-blue-400'>
          <IoPerson/>
          <Link to='/gestion-stagiaire'>Gestion stagiaires</Link>
        </div>
        <div className='flex items-center gap-2 px-3 py-2 hover:bg-blue-400'>
          <RiLogoutCircleRLine/>
          <Link to='/admin' className='text-red-500'>Déconnexion</Link>
        </div>
      </div>      
  )
}

export default AdminSidebar
