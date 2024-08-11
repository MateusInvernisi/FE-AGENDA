import { useState, useEffect } from "react";
import EventoContext from "./EventoContext";
import { getEventosAPI, getEventosPorCodigoAPI, deleteEventosAPI, cadastraEventosAPI } from "../../../servicos/eventoServicos";
import Tabela from './Tabela';
import Form from "./Form";
import WithAuth from "../../../seguranca/WithAuth";
import { useNavigate } from "react-router-dom";

const Evento = () => {
    let navigate = useNavigate();

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({ id: "", nome: "" });

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({ id: 0, nome: "" });
    };

    const editarObjeto = async (id) => {
        try {
            const evento = await getEventosPorCodigoAPI(id);
            setObjeto(evento);
            setEditar(true);
            setAlerta({ status: "", message: "" });
        } catch (err) {
            window.location.reload();
            navigate("login", { replace: true });
        }
    };

    const acaoCadastrar = async (e) => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            const retornoAPI = await cadastraEventosAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
            recuperaEventos();
        } catch (err) {
            window.location.reload();
            navigate("login", { replace: true });
        }
        
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    };

    const recuperaEventos = async () => {
        try {
            const eventos = await getEventosAPI();
            setListaObjetos(eventos);
        } catch (err) {
            window.location.reload();
            navigate("login", { replace: true });
        }
    };

    const remover = async (id) => {
        if (window.confirm('Deseja remover este objeto?')) {
            try {
                const retornoAPI = await deleteEventosAPI(id);
                setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
                recuperaEventos();
            } catch (err) {
                window.location.reload();
                navigate("login", { replace: true });
            }
        }
    };

    useEffect(() => {
        recuperaEventos();
    }, []);

    return (
        <EventoContext.Provider value={{
            alerta, listaObjetos, remover,
            objeto, acaoCadastrar, handleChange, novoObjeto, editarObjeto
        }}>
            <Tabela />
            <Form />
        </EventoContext.Provider>
    );
};

export default WithAuth(Evento);
