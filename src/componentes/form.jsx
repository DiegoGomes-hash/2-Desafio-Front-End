import React from 'react'
import {useForm} from 'react-hook-form'

    const FormsS = (props) => {

    const {register,errors,handleSubmit} = useForm();

    const onSubmit = (a, e) => {
        console.log(a)
        props.Adicionarusuario (a)
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="items">
            <label>Título</label>
            <input type = "text" name = "titulo" rows="10" ref = {
                register({
                    required: {value: true, message: 'Escreve algo bixo'}
                })
            }/>
            <label>Descrição</label>
            <textarea type = "text" name="descricao" rows="10" cols="41"  ref = {
                register({
                    required: {value: true, message: 'Escreve algo bixo'}
                })
            }/>           
            <button className="butt">Adicionar</button>
        </form>

    );
}

export default FormsS;