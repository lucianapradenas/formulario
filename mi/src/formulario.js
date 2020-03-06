import React from "react";
import "./styles.modules.scss";
import usuario from './usuario.png';


class Form extends React.Component{
 constructor(args){
     super(args)
     this.state ={
        username:'',
        name:'',
        lastname:'',
        lenguaje:'',
         email:''
        
     }
 }
 onChange =(e)=> {
    e.preventDefault()
    this.props.datosAct(this.state)
}
 render(){
     return(
         <from  onSubmit={this.onChange}>
         <div className="row">
          <h1 className="titulo"> Registrate </h1>
           <img src={usuario} alt="usuario" />
            <br></br>
            <hr></hr>
            <label htmlFor="username">Usuario</label>

             <input name="username" 
            value= {this.state.username}
             id="username"
              type="text" 
              className="input"
              placeholder="Usuario"
              onChange={(e)=> this.setState({username:e.target.value})}
              />
              
             <label htmlFor="nombre">Nombre</label>
            
             <input name="name" 
             value={this.state.name}
             id="name"
            type="text" 
            className="input"
            placeholder="Nombre"
            onChange={(e)=> this.setState({name:e.target.value})}
            />

             <label htmlFor="apellido">Apellido</label>

             <input 
             value= {this.state.lastname}
             name="lastname"
              id="lastname"
               type="text"
               className="input" 
               placeholder="Apellido"
               onChange={(e)=> this.setState({lastname:e.target.value})}
               />


            <label htmlFor="Email">E-mail</label>

            <input 
            value= {this.state.email}
            name="email"
            id="email"
            type="email"
            className="input" 
            placeholder="1234@gmail.com"
            onChange={(e)=> this.setState({lastname:e.target.value})}
            />
               
             <label htmlFor="">Idioma</label>
             
             <select id="lenguaje"
              name="lenguaje"
              value={this.state.lenguaje}
              onChange={(e)=> this.setState({lenguaje:e.target.value})} >

                 <option value=""> Selecciona un valor</option>
                 <option value="en">Ingles</option>
                 <option value="es">Español</option>
                 <option value="de">Aleman</option>
                 
             </select>

             <label 
             htmlFor="gender">Genero</label>
             <input 
            type="radio"
            name="gender"
            value="h"
            onChange={(e)=> this.setState({h:e.target.value})}
             />Hombre
             <input 
             type="radio"
            name="gender"
            value="m"
            onChange={(e)=> this.setState({m:e.target.value})}
             />Mujer
             <input type="radio"
              name="gender" 
               value="o" 
             onChange={(e)=> this.setState({o:e.target.value})}/>otro
               <br /><br />
             <input type="submit" value="Enviar" />

             </div>
    </from>
     )
 }
}


export default Form;
