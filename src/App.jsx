import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginProvider } from "../src/componentes/telas/login/LoginContext";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from './componentes/Menu'
import Home from './componentes/telas/Home'
import Login from "./componentes/telas/login/Login"
import Contato from './componentes/telas/contato/Contato'
import Evento from './componentes/telas/evento/Evento'
import Usuario from './componentes/telas/usuario/Usuario'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        index: true,
        element: <Home />,
      }, 
      {
        path: "/Logins",
        element: <Login />,
      },
      {
        path: "/Eventos",
        element: <Evento />,
      },
      {
        path: "/Contatos",
        element: <Contato />,
      },
      {
        path: "/Usuarios",
        element: <Usuario />,
      }
    ]
  }
]);

function App() {
  return (
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  );
}

export default App;
