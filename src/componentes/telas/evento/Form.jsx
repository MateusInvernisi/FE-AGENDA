import { useContext, useState, useEffect } from "react";
import EventoContext from "./EventoContext";
import { getToken } from "../../../seguranca/Autenticacao"; // Certifique-se de que o caminho está correto

function Form() {
    const { objeto, handleChange, acaoCadastrar } = useContext(EventoContext);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const token = getToken(); // Obtenha o token de autenticação
                const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}` // Inclua o token no cabeçalho
                    }
                });
                const data = await response.json();
                if (Array.isArray(data)) {
                    setUsuarios(data);
                } else {
                    setUsuarios([]);
                }
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        }

        fetchUsuarios();
    }, []);

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ color: "white" }}>Evento</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="txtCodigo" className="form-label">Código</label>
                                <input type="number" className="form-control" id="txtCodigo" readOnly name="id" value={objeto ? objeto.id : ''} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="txtTitulo" className="form-label">Título</label>
                                <input type="text" className="form-control" id="txtTitulo" placeholder="Informe o título" required name="titulo" value={objeto ? objeto.titulo : ''} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="txtDataHora" className="form-label">Selecione uma data e hora:</label>
                                <input type="datetime-local" className="form-control" id="txtDataHora" required name="data_hora" value={objeto ? objeto.data_hora : ''} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="txtDescricao" className="form-label">Insira a descrição do evento</label>
                                <input type="text" className="form-control" style={{ position: "static" }} id="txtDescricao" required name="descricao" value={objeto ? objeto.descricao : ''} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="selectUsuario" className="form-label">Usuário Responsável</label>
                                <select className="form-select" id="selectUsuario" required name="usuario_id" value={objeto ? objeto.usuario_id : ''} onChange={handleChange}>
                                    <option value="">Selecione um usuário</option>
                                    {usuarios.map(usuario => (
                                        <option key={usuario.id} value={usuario.id}>{usuario.nome}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success">
                                Salvar <i className="bi bi-save"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;
