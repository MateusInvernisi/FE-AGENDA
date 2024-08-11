import React, { useContext } from "react";
import LoginContext from "./LoginContext";
import '../../comuns/estilos/login.css'
import Alerta from "../../comuns/Alerta";

function Form() {
    const { alerta, objeto, cadastro, acaoLogin, acaoCadastrar, handleEmailChange,
            handleSenhaChange, handleCadastroChange } = useContext(LoginContext);

    return (
        <div className="tela_fundo">
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Entrar</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Criar Conta</label>
                <Alerta alerta={alerta} />
                <div className="login-form">
                    <div className="sign-in-htm">
                        <form id="formulario" onSubmit={acaoLogin}>
                            <div className="group">
                                <label htmlFor="user" className="label">Email</label>
                                <input id="user" type="email" className="input" required name="email" value={objeto.email} onChange={handleEmailChange} />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Senha</label>
                                <input id="pass" type="password" className="input" data-type="password" required name="senha" value={objeto.senha} onChange={handleSenhaChange} />
                            </div>
                            <div className="group">
                                <button type="submit" className="button">Entrar</button>
                            </div>
                            <div className="hr"></div>
                        </form>
                    </div>
                    <div className="sign-up-htm">
                        <form id="formulario-cadastro" onSubmit={acaoCadastrar}>
                            <div className="group">
                                <label htmlFor="txtNome" className="label">Nome</label>
                                <input id="txtNome" className="input" type="text" name="nome" value={cadastro.nome} onChange={handleCadastroChange} />
                            </div>
                            <div className="group">
                                <label htmlFor="txtEmail" className="label">Email</label>
                                <input id="txtEmail" type="email" className="input" name="email" value={cadastro.email} onChange={handleCadastroChange } />
                            </div>
                            <div className="group">
                                <label htmlFor="txtSenha" className="label">Senha</label>
                                <input id="txtSenha" type="password" className="input" data-type="password" name="senha" value={cadastro.senha} onChange={handleCadastroChange } />
                            </div>
                            <div className="group">
                                <button type="submit" className="button" >Criar Conta</button>
                            </div>
                            <div className="hr"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;
