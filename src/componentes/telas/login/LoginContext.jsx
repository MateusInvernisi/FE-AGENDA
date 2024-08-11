import { createContext, useState, useEffect } from 'react';
import { getToken } from '../../../seguranca/Autenticacao';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [autenticado, setAutenticado] = useState(false);

    useEffect(() => {
        const token = getToken();
        if (token) {
            setAutenticado(true);
        }
    }, []);

    return (
        <LoginContext.Provider value={{ autenticado, setAutenticado }}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginContext;
