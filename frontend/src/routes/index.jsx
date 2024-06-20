import App from "../App";
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from "../pages/DRH/Dashboard";
import GestionStagiaire from "../pages/DRH/GestionStagiaire";
import Detail from "../pages/DRH/Detail";
import AcceuilAdmin from "../pages/Admin/AcceuilAdmin";
import Calendar from "../components/Admin/Calendar";
import Kanban from "../components/Admin/Kanban";
import PageAcceuil from "../pages/Acceuil/Acceuil.jsx";
import UserManagement from "../components/Admin/userManagement";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/acceuil",
        element: <PageAcceuil/>
      },
      {
        path:"/gestion-stagiaire",
        element: <GestionStagiaire/>
      },
      {
        path:"/details",
        element: <Detail/>
      },
      {
        path:"/admin",
        element: <AcceuilAdmin/>
      },
      {
        path:"/admin/calendrier",
        element: <Calendar/>
      },
      {
        path:"/admin/kanban",
        element: <Kanban/>
      },
      {
        path:"/admin/gestion-utilisateur",
        element: <UserManagement/>
      },
    ]
  }
]
)
export default router;