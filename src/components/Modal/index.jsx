import './modal.css';

export default function Modal({ conteudo, close }) {
    return (
        <div className='modal'>
            <div className='container'>
                <button className='close' onClick={close}>
                    FECHAR
                </button>

                <main className='main'>

                    <h2>Preencha as informações do cliente para salvar as margens</h2>

                    <div className='row'>
                        <span>
                            Nome do cliente (Oficial):
                        </span>
                        <input />
                    </div>

                    <div className='row'>
                        <span>
                            Cidade:
                        </span>
                        <input />
                    </div>

                    <div className='row'>
                        <span>
                            Responsável:
                        </span>
                        <input />
                    </div>

                    <div className='row'>
                        <span>
                            Chamado (Skynet):
                        </span>
                        <input />
                    </div>

                    <div className='row'>
                        <span>
                            Margens a serem salvas:
                        </span>
                        <span>
                            Direita <i>{conteudo.direita}</i>
                            Esquerda <i>{conteudo.esquerda}</i>
                            Superior <i>{conteudo.superior}</i>
                            Inferior <i>{conteudo.inferior}</i>
                        </span>
                    </div>

                    <button>
                        Salvar
                    </button>

                </main>

            </div>
        </div>
    )
}