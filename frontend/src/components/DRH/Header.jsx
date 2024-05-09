import React from 'react'
import { IoPerson } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <div>
      <div className='bg-white h-16 px-4 flex justify-between items-center'>
      <div>
        <h2>Bienvenue DRH</h2>
      </div>
      <div className='flex items-center'>
        <IoPerson/>
        <h2>Mamadou</h2>
      </div>
      </div>
      <div className='bg-white h-16 px-4 flex justify-around items-center'>
      <div>
        <h2>Liste des stagiaires</h2>
      </div>
      <div className='relative'>
      <CiSearch
        fontSize={25}
        className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'
      />
        <input
          type='search'
          placeholder='rechercher stagiaire'
          className='text-sm focus:outline-none h-10 w-[20rem] border border-gray-300 rounded-sm pr-4 pl-11'
        />
      </div>
      </div>
    </div>
   
  )
}

export default Header
