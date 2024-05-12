import React from 'react'
import SideBar from '../../components/DRH/SideBar'
import hero from '../../assets/hero.png'
import { IoCloudDownload } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Detail = () => {
  return (
    <div>
      <div className='flex flex-row bg-white h-screen w-screen overflow-hidden'>
      <SideBar/>
      <div className='h2-4 flex-1 m-7 text-center'>
        <h1 className='text-2xl '>
          Détails dossier candidat
        </h1>
        <div>
          <div className='flex justify-around mt-[100px]'>
            <div className='w-[200px] h-[400px] bg-neutral-200'>
              <div className='flex justify-center items-center'>
                <img src={hero} alt='hero' className='mt-9'/>
              </div>
              <div className='flex flex-col justify-between my-8'>
              <div className='flex flex-col justify-center my-8'>
                  <h2 className='font-bold'>Prénom</h2>
                  <h2>Mamadou</h2>
                </div>
                <div className='flex flex-col my-3'>
                  <h2 className='font-bold'>Nom</h2>
                  <h2>Sy</h2>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between'>
              <div>
                <h2 className='font-bold'>Email</h2>
                <h2>mamadou@gmail.com</h2>
              </div>
              <div>
                <h2 className='font-bold'>Description poste</h2>
                <h2>Full stack web developper</h2>
              </div>
              <div>
                <h2 className='font-bold'>Prérequis</h2>
                <p className='break-words'>
                  React, Node Js, Mongo DB, Next Js, Tailwind
                </p>
              </div>
              <div className='flex justify-around items-center'>
                <button className="rounded-xl bg-gradient-to-br from-[#0ef70e] to-[#19e207] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#19e207]/50">
                    Accepter
                  </button>
                <button className="rounded-xl bg-gradient-to-br from-[#f70e12] to-[#e20707] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#f70e12]/50">
                  Refuser
                </button>
              </div> 
            </div>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col'>
                <h2 className='font-bold'>Téléphone</h2>
                <h2>77380979</h2>
              </div>
              <div className='flex'>
                <IoCloudDownload color='blue' fontSize={40} className='animate-bounce'/>
                <Link className='hover:text-blue-500'>
                  Télécharger cv
                </Link>   
              </div>
              <div>
                <IoCloudDownload color='blue' fontSize={40} className='animate-bounce'/>
                <Link className='hover:text-blue-500'>
                  Télécharger lettre de motivation
                </Link>
              </div>
            </div>
          </div>       
      </div>
      </div>  
    </div>
    </div>
  )
}

export default Detail
