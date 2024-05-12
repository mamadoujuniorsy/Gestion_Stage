import React from 'react'
import AdminSidebar from '../../components/Admin/AdminSidebar'
import AdminNavbar from '../../components/Admin/AdminNavbar'
const AcceuilAdmin = () => {
  return (
    <div>
        <div className="w-0 bg-dark">
    <AdminSidebar />
  </div>
  <div className="fixed md:static bg-dark w-full ">
  <AdminNavbar/>
</div>
    </div>
    
  )
}

export default AcceuilAdmin
