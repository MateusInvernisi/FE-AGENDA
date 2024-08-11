import UsuarioContext from "./UsuarioContext";
import { useContext } from "react";

function Form() {
    const { objeto, handleChange, acaoCadastrar } = useContext(UsuarioContext);

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Usuario</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="txtCodigo" className="form-label">Código</label>
                                <input type="number" className="form-control" id="txtCodigo" readOnly name="id" value={objeto ? objeto.id : ''} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="txtTitulo" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="txtTitulo" placeholder="Informe seu Nome" readOnly name="nome" value={objeto ? objeto.nome : ''} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="txtDataHora" className="form-label">Insira o email</label>
                                <input type="email" className="form-control" id="txtEmail" required name="email" value={objeto ? objeto.email : ''} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="txtDataHora" className="form-label">Insira uma senha</label>
                                <input type="password" className="form-control" id="txtSenha" required name="senha" value={objeto ? objeto.senha : ''} onChange={handleChange} />
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
