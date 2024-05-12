import App from "../App";
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from "../pages/DRH/Dashboard";
import GestionStagiaire from "../pages/DRH/GestionStagiaire";
import Detail from "../pages/DRH/Detail";
import AcceuilAdmin from "../pages/Admin/AcceuilAdmin";
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
    ]
  }
]
)
export default router;