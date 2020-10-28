import React from 'react'
import {useForm} from 'react-hook-form'

    const EditarUsuario = (props) => {

    console.log(props.atualizar)

    const {register,errors,handleSubmit, setValue} = useForm({
        defaultValues:props.atualizar
    });
    setValue('titulo',props.atualizar.titulo);
    setValue('descricao',props.atualizar.descricao);

    const onSubmit = (data, e) => {
        
        props.AtualizarUse(props.atualizar.id, data)
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
            <textarea type = "text" name="descricao" rows="8" cols="45"  ref = {
                register({
                    required: {value: true, message: 'Escreve algo bixo'}
                })
            }/>           
            <button className="butt">Editar</button>
        </form>

        );
    }

export default  EditarUsuario;