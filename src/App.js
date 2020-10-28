import React, { useState } from 'react';
import Card from './componentes/card';
import { v4 as uuidv4 } from 'uuid';
import FormsS from './componentes/form';
import Logoo from './logo.png';
import EditarUsuario from './componentes/editarusuario'

function App() {

    const Dados = [
        //{id: uuidv4(), titulo: 'teste', descricao: 'Bte'},
        //{id: uuidv4(), titulo: 'tes' , descricao: 'ter'}

    ];

    const [usuario, setUsuario] = useState(Dados);

    const Adicionarusuario = (usuarios) => {
        usuarios.id = uuidv4();
        setUsuario([...usuario, usuarios])
    };

    const Deletarusuario = (id) => {
        const FilterArray = usuario.filter(usuario => usuario.id !== id);
        setUsuario(FilterArray);
    }

    { /*  */ }

    const [editar, setEditar] = useState(false);

    const [atualizar, setAtualizar] = useState({
        id: null,
        titulo: '',
        descricao: ''
    });

    const ResetarUsuario = (usuario) => {
        setEditar(true);
        setAtualizar({
            id: usuario.id,
            titulo: usuario.titulo,
            descricao: usuario.descricao
        })
    }

    const AtualizarUse = (id, AtualizarUse) => {
        setEditar(false);
        setUsuario(usuario.map(usuario => (usuario.id === id ? AtualizarUse : usuario)))
    }

    return (

        <
        div className = " items" >

        <
        img className = "logo"
        src = { Logoo }
        alt = "" / >
        <
        div className = "flex-row" >
        <
        div className = "" > {
            editar ? ( <
                div >
                <
                EditarUsuario atualizar = { atualizar }
                AtualizarUse = { AtualizarUse }
                />   <
                /div>
            ) : ( <
                div >
                <
                FormsS Adicionarusuario = { Adicionarusuario }
                /> <
                /div>
            )
        } <
        /div>           <
        /div> <
        div className = "items" >
        <
        Card usuario = { usuario }
        Deletarusuario = { Deletarusuario }
        ResetarUsuario = { ResetarUsuario }
        />  <
        /div> <
        /div>

    );
}

export default App;