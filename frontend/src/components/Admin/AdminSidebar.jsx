import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { FaRegCalendar } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdViewKanban } from "react-icons/md";
import { IoPerson } from 'react-icons/io5';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
const AdminSidebar = () => {
  return (
    <div className='bg-white w-60 p-3 flex flex-col'>
        <img
          src={logo}
        />
        <div className='flex items-center gap-2 px-3 py-2 hover:bg-blue-400'>
        <RxDashboard />
          <Link to='/admin'>Tableau de bord</Link>
        </div>
        <div className='flex items-center gap-2 px-3 py-2 hover:bg-blue-400'>
          <FaRegCalendar/>
          <Link to='/admin/calendrier'>Calendrier</Link>
        </div>
        <div className='flex items-center gap-2 px-3 py-2 hover:bg-blue-400'>
          <MdViewKanban/>
          <Link to='/admin/kanban'>Kanban</Link>
        </div>
        <div className='flex items-center gap-2 px-3 py-2 hover:bg-blue-400'>
          <IoPerson/>
          <Link to='/admin/gestion-utilisateur'>gestion utilisateurs</Link>
        </div>
        <div className='flex items-center gap-2 px-3 py-2 hover:bg-blue-400'>
          <RiLogoutCircleRLine/>
          <Link to='#' className='text-red-500'>Déconnexion</Link>
        </div>
      </div>      
  )
}

export default AdminSidebar
