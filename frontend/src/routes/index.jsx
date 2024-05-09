import App from "../App";
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from "../pages/DRH/Dashboard";
import GestionStagiaire from "../pages/DRH/GestionStagiaire";
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
      
    ]
  }
]
)
export default router;