import React, { useContext } from "react";
import EventoContext from "./EventoContext";
import Alerta from "../../comuns/Alerta";
import '../../../componentes/comuns/estilos/login.css';

function Tabela() {
    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(EventoContext);


    return (
        <div className="tela_fundo"  style={{padding: 80}}>
            <div className="tabela-html">
                <h1 style={{color: "white"}}>Eventos</h1>
                <Alerta alerta={alerta} />
                {listaObjetos.length === 0 &&
                    <h1>Nenhum registro encontrado</h1>}
                {listaObjetos.length > 0 &&
                    <div className="table-responsive" style={{ maxHeight: 400, overflowY: "auto" }}>
                        <table className="table table-hover" id="accordion">
                            <thead>
                                <tr>
                                    <th scope="col">Ações</th>
                                    <th scope="col">Código</th>
                                    <th scope="col">Título</th>
                                    <th scope="col">Data & Hora</th>
                                    <th scope="col">Líder</th>
                                    <th scope="col">
                                        <button type="button" style={{ border: 'none', margin: 10, backgroundColor: 'transparent' }}
                                            data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                            onClick={() => novoObjeto()}>
                                            <i className="bi bi-file-earmark-plus"></i>
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaObjetos.map((objeto, index) => (
                                    <React.Fragment key={objeto.id}>
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
                                            </td><th scope="row">{objeto.id}</th>
                                            <td>{objeto.titulo}</td>
                                            <td>{new Date(objeto.data_hora).toLocaleString()}</td>

                                            <td>{objeto.usuario_id}</td>
                                            <td>
                                                <i class="bi bi-arrow-down-short" style={{ color: "green", fontSize: 20, fontWeight: "bold" }}></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="6" id={`collapse${index}`} className="collapse acc" data-parent="#accordion">
                                                <p>{objeto.descricao}</p>
                                            </td>
                                        </tr>
                                    </React.Fragment>
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
