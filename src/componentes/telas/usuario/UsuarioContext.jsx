import { createContext } from "react";

const UsuarioContext = createContext({
  alerta: {},
  listaObjetos: [],
  remover: () => {},
  objeto: {},
  acaoCadastrar: () => {}, 
  handleChange: () => {},
  novoObjeto: () => {},
  editarObjeto: () => {},
});

export default UsuarioContext;
