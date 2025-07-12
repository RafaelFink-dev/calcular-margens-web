import React from "react"
import './clientes.css';
import Sidebar from '../../components/Sidebar/';

import { db } from '../../services/firebaseConnection';
import { collection, doc, deleteDoc, onSnapshot } from 'firebase/firestore';

import ModalEdit from "../../components/ModalEdit";

import { toast } from "react-toastify";

import { useEffect, useState } from "react";

const listRef = collection(db, 'clientes');

export default function Clientes() {

    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [clienteEdited, setClienteEdited] = useState("");

    function toggleModal(item) {

        setClienteEdited(item)
        setShowModal(!showModal);


    }

    useEffect(() => {

        async function loadClientes() {

            onSnapshot(listRef, (snapshot) => {
                let lista = [];

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        nomeCliente: doc.data().nomeCliente,
                        cidade: doc.data().cidade,
                        responsavel: doc.data().responsavel,
                        chamado: doc.data().chamado,
                        margems: doc.data().margems,
                        tipoLivro: doc.data().tipoLivro
                    })

                    setClientes(lista);
                    console.log(lista)
                    setLoading(false);
                })
            })

        }

        loadClientes();
        setLoading(false);

    }, [])

    async function deleteCliente(id) {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este cliente?");

        if (confirmDelete) {
            const docRef = doc(db, "clientes", id);
            await deleteDoc(docRef);
            toast.success("Cliente excluído com sucesso!");
        }
    }
    if (loading) {
        return (
            <div>
                <div>
                    <div>
                        <span>Buscando clientes...</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <Sidebar className='sidebar' />

            <div>
                {clientes.length === 0 ? (
                    <div className='container dashboard'>
                        <span>Nenhum cliente encontrado...</span>
                    </div>
                ) : (
                    <>
                        <div className='container' style={{ fontWeight: 'bold' }}>
                            <h3>CLIENTES CADASTRADOS:</h3>
                        </div>
                        <div className='container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th scope='col'>Cliente</th>
                                        <th scope='col'>Cidade</th>
                                        <th scope='col'>Responsável</th>
                                        <th scope='col'>Chamado</th>
                                        <th scope='col'>Tipo de Livro</th>
                                        <th scope='col'>Margem esquerda</th>
                                        <th scope='col'>Margem direita</th>
                                        <th scope='col'>Margem superior</th>
                                        <th scope='col'>Margem inferior</th>
                                        <th scope='col'>#</th>
                                        <th scope='col'>#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clientes.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td data-label='Cliente'>{item.nomeCliente}</td>
                                                <td data-label='Assunto'>{item.cidade}</td>
                                                <td data-label='Cadastrado'>{item.responsavel}</td>
                                                <td data-label='Chamado'>{item.chamado}</td>
                                                <td data-label='Chamado'>{item.tipoLivro}</td>
                                                <td data-label='Margem Direita'>{item.margems?.direita}</td>
                                                <td data-label='Margem Direita'>{item.margems?.esquerda}</td>
                                                <td data-label='Margem Direita'>{item.margems?.superior}</td>
                                                <td data-label='Margem Direita'>{item.margems?.inferior}</td>
                                                <td data-label='# - Editar'>
                                                    <button className='action' onClick={() => toggleModal(item)}>
                                                        Editar
                                                    </button>
                                                </td>
                                                <td data-label='# - Excluir'>
                                                    <button className='action' onClick={() => deleteCliente(item.id)}>
                                                        Excluir
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>

            {
                showModal && (
                    <ModalEdit
                        conteudo={clienteEdited}
                        close={() => setShowModal(!showModal)}
                    />
                )
            }

            <div className="read-the-docs">
                <p>MK Innovations. Copyright © 2024. Todos os direitos reservados.</p>
            </div>

        </>
    )
}