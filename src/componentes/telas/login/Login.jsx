import { useState, useContext, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import LoginContext from './LoginContext';
import Form from '../login/Form';
import {cadastraUsuarioAPI } from "../../../servicos/usuarioServicos";
import { gravaAutenticacao, getToken } from '../../../seguranca/Autenticacao';


const Login = () => {
    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [objeto, setObjeto] = useState({ email: "", senha: "" });
    const [cadastro, setCadastro] = useState({ id: null, nome: "", email: "", senha: "" });
    const { autenticado, setAutenticado } = useContext(LoginContext); 

    const novoCadastro = () => {
        setAlerta({status : "", message : ""});
        setCadastro({
            id : 0, 
            nome : "",
            email : "",
            senha : ""
        });
    }

    const acaoLogin = async e => {

        e.preventDefault();

        try {
            const body = {
                email: objeto.email,
                senha: objeto.senha
            };
            await fetch(`${process.env.REACT_APP_ENDERECO_API}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            }).then(response => response.json())
                .then(json => {
                    if (json.auth === false) {
                        setAlerta({ status: "error", message: json.message })
                    }
                    if (json.auth === true) {
                        setAutenticado(true);
                        gravaAutenticacao(json);                        
                    }
                });
        } catch (err) {
            console.error(err.message);
            setAlerta({ status: "error", message: err.message })
        }
    };

    useEffect(() => {
        try {
            const token = getToken();
            if (token != null) {
                setAutenticado(true);
            }
        } catch (err) {
            setAlerta({status : "error" , message : err != null ? err.message : ""});
        }
    }, [getToken]);
    

    if (autenticado === true) {
        return <Navigate to="/" />
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = "POST";
        try {
            let retornoAPI = await cadastraUsuarioAPI(cadastro, metodo);
            console.log("Retorno da API:", retornoAPI); // Log do retorno da API
            setAlerta({status : retornoAPI.status, message : retornoAPI.message});
            if (retornoAPI.status === 'success') {
                setCadastro(retornoAPI.objeto); // Atualize o estado cadastro com os dados do objeto retornado pela API
            }
        } catch (err) {
            console.log(err);
            setAlerta({ status: "error", message: "Erro ao cadastrar usuário" });
        }}

    const handleCadastroChange = (e) => {
        const { name, value } = e.target;
        setCadastro({ ...cadastro, [name]: value });
    };

    const handleEmailChange = (e) => {
        setObjeto({ ...objeto, email: e.target.value });
    };

    const handleSenhaChange = (e) => {
        setObjeto({ ...objeto, senha: e.target.value });
    };

    return (
        <LoginContext.Provider value={{ alerta, objeto, cadastro, novoCadastro, acaoLogin, acaoCadastrar, handleEmailChange, handleSenhaChange, handleCadastroChange, }}>
            <div>
                <Form />
            </div>
        </LoginContext.Provider>
    );
};

export default Login;
