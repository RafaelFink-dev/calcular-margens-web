import './modal.css';
import { useState } from 'react';

import { db } from '../../services/firebaseConnection';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function ModalEdit({ conteudo, close }) {

    const [cliente, setCliente] = useState(conteudo?.nomeCliente || '');
    const [cidade, setCidade] = useState(conteudo?.cidade || '');
    const [responsavel, setResponsavel] = useState(conteudo?.responsavel || '');
    const [chamado, setChamado] = useState(conteudo?.chamado || '');

    const [margemDireita, setMargemDireita] = useState(conteudo?.margems?.direita || '');
    const [margemEsquerda, setMargemEsquerda] = useState(conteudo?.margems?.esquerda || '');
    const [margemSuperior, setMargemSuperior] = useState(conteudo?.margems?.superior || '');
    const [margemInferior, setMargemInferior] = useState(conteudo?.margems?.inferior || '');

    async function handleUpdate() {
        if (cliente && cidade && responsavel && chamado) {
            const docRef = doc(db, "clientes", conteudo.id);

            await updateDoc(docRef, {
                nomeCliente: cliente.toUpperCase(),
                cidade: cidade.toUpperCase(),
                responsavel: responsavel.toUpperCase(),
                chamado: chamado,
                margems: {
                    direita: margemDireita,
                    esquerda: margemEsquerda,
                    superior: margemSuperior,
                    inferior: margemInferior
                }
            })
                .then(() => {
                    toast.success('Cliente atualizado com sucesso!');
                    close(); // fecha o modal
                })
                .catch((e) => {
                    console.log(e);
                    toast.error('Erro ao atualizar cliente');
                });
        } else {
            toast.warn('Preencha todos os campos!');
        }
    }

    return (
        <div className='modal'>
            <div className='container'>
                <button className='close' onClick={close}>
                    FECHAR
                </button>

                <main className='main'>
                    <h2>Alterar informações do cliente</h2>

                    <div className='row'>
                        <span>Nome do cliente (Oficial):</span>
                        <input
                            value={cliente}
                            onChange={(e) => setCliente(e.target.value)}
                        />
                    </div>

                    <div className='row'>
                        <span>Cidade:</span>
                        <input
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                        />
                    </div>

                    <div className='row'>
                        <span>Responsável:</span>
                        <input
                            value={responsavel}
                            onChange={(e) => setResponsavel(e.target.value)}
                        />
                    </div>

                    <div className='row'>
                        <span>Chamado (Skynet):</span>
                        <input
                            value={chamado}
                            onChange={(e) => setChamado(e.target.value)}
                        />
                    </div>

                    <div className='row'>
                        <span><strong>Margens (em mm):</strong></span>

                        <label>
                            Direita:
                            <input
                                type="number"
                                value={margemDireita}
                                onChange={(e) => setMargemDireita(e.target.value)}
                            />
                        </label>

                        <label>
                            Esquerda:
                            <input
                                type="number"
                                value={margemEsquerda}
                                onChange={(e) => setMargemEsquerda(e.target.value)}
                            />
                        </label>

                        <label>
                            Superior:
                            <input
                                type="number"
                                value={margemSuperior}
                                onChange={(e) => setMargemSuperior(e.target.value)}
                            />
                        </label>

                        <label>
                            Inferior:
                            <input
                                type="number"
                                value={margemInferior}
                                onChange={(e) => setMargemInferior(e.target.value)}
                            />
                        </label>
                    </div>

                    <button onClick={handleUpdate}>
                        Salvar
                    </button>
                </main>
            </div>
        </div>
    );
}
