import React, { useContext } from "react";
import UsuarioContext from "./UsuarioContext";
import Alerta from "../../comuns/Alerta";
import '../../../componentes/comuns/estilos/login.css';
import '../../../componentes/comuns/estilos/tabela.css'

function Tabela() {
    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(UsuarioContext);


    return (
        <div className="tela_fundo" style={{padding: 80}}>
            <div className="tabela-html" >
                <h1 style={{  color: 'white'}}>Usuarios</h1>
                <Alerta alerta={alerta} />
                {listaObjetos.length === 0 &&
                    <h1>Nenhum registro encontrado</h1>}
                {listaObjetos.length > 0 &&
                    <div className="table-responsive" style={{ maxHeight: 400, overflowY: "auto" }} >
                        <table className="table table-hover" id="accordion" >
                            <thead>
                                <tr>
                                    <th scope="col">Ações</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody >
                                {listaObjetos.map((objeto, index) => (
                                    <tr data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`} className="collapsed">
                                        <td align="center">
                                            <button style={{ border: 'none', margin: 10, backgroundColor: 'transparent' }} title="Editar"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalEdicao"
                                                onClick={() => editarObjeto(objeto.id)}>
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button style={{ border: 'none', margin: 10, backgroundColor: 'transparent' }} title="Remover"
                                                onClick={() => { remover(objeto.id) }}>
                                                <i className="bi bi-trash3"></i>
                                            </button>
                                        </td>
                                        <td>{objeto.nome}</td>
                                        <td>{objeto.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    );
}

export default Tabela;
