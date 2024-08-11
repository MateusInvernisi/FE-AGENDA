import { NavLink, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import LoginContext from '../componentes/telas/login/LoginContext';
import '../componentes/comuns/estilos/navbar.css';
import { logout } from '../seguranca/Autenticacao';

const Menu = () => {
    const { autenticado } = useContext(LoginContext); // Consome o estado do contexto

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Agenda.Online</NavLink>
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" exact to="/Logins">Login</NavLink>
                                </li>
                                {autenticado && (
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Eventos">Eventos</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Usuarios">Usuários</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <button className="nav-link" onClick={logout}>
                                                Sair
                                            </button>
                                        </li>
                                    </>
                                )}
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Contatos">Contatos</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Menu;
