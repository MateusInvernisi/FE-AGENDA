import UsuarioContext from "./UsuarioContext";
import Tabela from "./Tabela";
import Form from "./Form";
import { getUsuariosAPI, getUsuarioPorCodigoAPI, deleteUsuarioAPI, cadastraUsuarioAPI  } from "../../../servicos/usuarioServicos";
import { useState, useEffect } from "react";
import WithAuth from "../../../seguranca/WithAuth";

const Usuario = () => {
    const [alerta, setAlerta] = useState({ status : "", message : ""});
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({ id : "", nome : ""});

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({status : "", message : ""});
        setObjeto({
            id : 0, 
            nome : ""
        });
    }

    const editarObjeto = async id => {
        setObjeto(await getUsuarioPorCodigoAPI(id));
        setEditar(true);
        setAlerta({status : "", message :""});
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraUsuarioAPI(objeto, metodo);
            setAlerta({status : retornoAPI.status, message : retornoAPI.message});
            setObjeto(retornoAPI.objeto);
            if (!editar){
                setEditar(true);
            }
        } catch (err) {
            console.log(err);
        }
        recuperaUsuarios();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({...objeto, [name] : value});
    }

    const recuperaUsuarios = async () => {
        try {
            const usuarios = await getUsuariosAPI();
            console.log('Dados recebidos da API:', usuarios);
            setListaObjetos(usuarios); // Ajuste conforme necessário
        } catch (error) {
            console.error('Erro ao recuperar usuários:', error);
        }
    };
    

    const remover = async id => {
        if (window.confirm('Deseja remover este objeto?')){
            let retornoAPI = await deleteUsuarioAPI(id);
            setAlerta({ status : retornoAPI.status, message : retornoAPI.message});
            recuperaUsuarios();
        }
    }

    useEffect(()=>{
        recuperaUsuarios();
    },[]);

    return (
            <UsuarioContext.Provider value={{
            alerta, listaObjetos, remover,
            objeto, acaoCadastrar, handleChange, novoObjeto, editarObjeto
            
        }}>
            <Tabela/>
            <Form/>
        </UsuarioContext.Provider>
    );
}

export default WithAuth(Usuario);