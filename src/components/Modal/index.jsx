import './modal.css';
import { useState } from 'react';

import { db } from '../../services/firebaseConnection';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function Modal({ conteudo, close }) {

    const [cliente, setCliente] = useState('');
    const [cidade, setCidade] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [chamado, setChamado] = useState(0);

    async function handleRegister() {

        if (cliente && cidade && responsavel && chamado) {

            await addDoc(collection(db, "clientes"), {
                nomeCliente: cliente.toUpperCase(),
                cidade: cidade.toUpperCase(),
                responsavel: responsavel.toUpperCase(),
                chamado: chamado,
                margems: {
                    direita: conteudo.direita,
                    esquerda: conteudo.esquerda,
                    superior: conteudo.superior,
                    inferior: conteudo.inferior
                }
            })
                .then(() => {
                    toast.success('Margem adicionada com sucesso!')
                    setResponsavel('')
                    setChamado(0)
                    setCliente('')
                    setCidade('')

                    return;
                })
                .catch((e) => {
                    console.log(e)
                    toast.error('Ops! ocorreu um erro ao registrar');
                    return;
                })
        } else {
            toast.warn('Preencha todos os campos para registrar.')
        }

    }

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
                        <input
                            value={cliente}
                            onChange={(e) => setCliente(e.target.value)}
                        />
                    </div>

                    <div className='row'>
                        <span>
                            Cidade:
                        </span>
                        <input
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                        />
                    </div>

                    <div className='row'>
                        <span>
                            Responsável:
                        </span>
                        <input
                            value={responsavel}
                            onChange={(e) => setResponsavel(e.target.value)}
                        />
                    </div>

                    <div className='row'>
                        <span>
                            Chamado (Skynet):
                        </span>
                        <input
                            value={chamado}
                            onChange={(e) => setChamado(e.target.value)}
                        />
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

                    <button onClick={handleRegister}>
                        Salvar
                    </button>

                </main>

            </div>
        </div>
    )
}