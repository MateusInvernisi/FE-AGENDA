export const loginUserAPI = async (objeto) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_ENDERECO_API}/login`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objeto)
            }
        );

        if (!response.ok) {
            return false;
        }

        return true;
    } catch (error) {
        // Se ocorrer um erro durante a solicitação, retornar false
        console.error('Erro ao fazer login:', error.message);
        return false;
    }
};
export const cadastraUsuarioAPI = async (objeto, metodo) => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/usuario`,
        {
            method : metodo,
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(objeto)
        });
    const data = await response.json();
    return data;
}