import { getToken } from '../seguranca/Autenticacao';

export const getUsuariosAPI = async () => {
    const token = getToken();
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Inclua o token aqui
        },
    });
    const data = await response.json();
    return data;
}

export const getUsuarioPorCodigoAPI = async id => {
    const token = getToken();
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Inclua o token aqui
        },
    });
    const data = await response.json();
    return data;
}

export const deleteUsuarioAPI = async id => {
    const token = getToken();
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Inclua o token aqui
        },
    });
    const data = await response.json();
    return data;
}

export const cadastraUsuarioAPI = async (objeto, metodo) => {
    const token = getToken();
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario`, {
        method: metodo,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Inclua o token aqui
        },
        body: JSON.stringify(objeto),
    });
    const data = await response.json();
    return data;
}
