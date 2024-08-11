import {jwtDecode } from "jwt-decode";

const NOMEAPP = 'Authorization';

export const getToken = () => {
    const localStorageAutenticacao = localStorage.getItem(NOMEAPP + '/autenticacao');
    const autenticacao = localStorageAutenticacao ? JSON.parse(localStorageAutenticacao) : null;

    if (!autenticacao || !autenticacao.auth || !autenticacao.token) {
        return null;
    }

    // Verifique a expiração do token
    const decoded = jwtDecode(autenticacao.token);
    if (decoded.exp <= Math.floor(Date.now() / 1000)) {
        console.log('Token expirado');
        logout();
        throw new Error('Token expirado');
    }

    return autenticacao.token;
}


export const getUsuario = () => {
    const localStorageAutenticacao = localStorage.getItem(NOMEAPP + '/autenticacao');
    const autenticacao = localStorageAutenticacao ?
    JSON.parse(localStorageAutenticacao) : null;
    if (autenticacao === null){
        return null;
    }
    if (autenticacao.auth === false) {
        return null;
    } else {
        let decoded = jwtDecode(autenticacao.token);
        if (decoded.exp <= Math.floor(new Date() / 1000)){
            console.log('Token expirado');
            logout();
            throw "Token expirado";
        } else {
            return decoded.usuario;
        }
    }
}

export const gravaAutenticacao = (json) => {
    localStorage.setItem(NOMEAPP+'/autenticacao',JSON.stringify(json));
}

export const logout = () => {
    localStorage.setItem(NOMEAPP + '/autenticacao', JSON.stringify({
        "auth": false,
        "token": ''
    }));
    window.location.href = '/Logins';  // Redireciona para a página de login
}
