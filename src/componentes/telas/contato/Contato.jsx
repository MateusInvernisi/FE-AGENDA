function Contato() {
    return (
        <div className="tela_fundo">

            <div className="contato-html" >
                <div style={{ marginBottom: 40, marginTop: 20 }}><p style={{ fontWeight: 'bold' }}>CONTATOS: </p></div>
                <div style={{ padding: 10 }}>
                <a
                        href="mailto:mateusinvernisi@gmail.com"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                    <i class="bi bi-envelope-at"> mateusinvernisi@gmail.com </i><br />
                    </a>
                </div>

                <div style={{ padding: 10 }}>
                    <i class="bi bi-telephone-inbound"> (54) 1234 - 1234</i> <br />
                </div>

                <div style={{ padding: 10 }}>
                    <a
                        href="https://wa.me/5549992104117"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <i class="bi bi-whatsapp"> +55 (54) 9 9210-4117</i> <br />
                    </a>
                </div>

                <div style={{ padding: 10 }}>
                <a 
                        href="https://www.google.com.br/maps/place/R.+Paissand%C3%BA,+11+-+Centro,+Passo+Fundo+-+RS,+99010-100/@-28.2536143,-52.4012108,17z/data=!3m1!4b1!4m6!3m5!1s0x94e2c079353bcf09:0xe4d27393e321cc6a!8m2!3d-28.2536143!4d-52.3986359!16s%2Fg%2F11c1zb7t13?hl=pt-BR&entry=ttu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                    <i class="bi bi-buildings"> Paissandú n11</i> <br />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contato;