import {Outlet} from 'react-router-dom'
import acceuil from "./pages/Acceuil/Acceuil.jsx";
import detail from "./pages/DRH/Detail.jsx";
function App() {

  return (
    <>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App
