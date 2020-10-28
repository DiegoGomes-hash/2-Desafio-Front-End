import React from 'react'

const Card = (props) => {
    return(
       
      <div className = "grid-container" className="flex">         
           {props.usuario.map((usuario) => (
                
                <>  
                    <div className = "grid-item"  className= "card" key= {usuario.id}> 
                        <h2> {usuario.titulo}</h2>
                        <h5> {usuario.descricao}</h5>                  
                        <button className = "but1" onClick = {() => {props.ResetarUsuario(usuario)}}> Editar  </button>
                        <button className = "but2" onClick = {() => {props.Deletarusuario(usuario.id)}}> Deletar  </button>
                    </div>
                </>  
               ))}           
       </div>
    );
}

export default Card;