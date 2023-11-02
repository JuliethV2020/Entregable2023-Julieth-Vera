import React, { useState } from 'react'
import Card from './Card'

function App() {

  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombreCantante,setNombreCantante] = useState("")
  const [genero,setGenero] = useState("")

  const validacion = e =>{

    e.preventDefault()
    if(nombreCantante.includes(" ") || nombreCantante.length < 3){
       alert("Por favor chequea que la información sea correcta")
    }else if(genero.length < 6){
        alert("Por favor chequea que la información sea correcta")
    }else{
        alert("Datos enviados correctamente");
    }

  }


  return (
    <>
      <div className="App">
      <h1> Formulario de musica</h1>
        
        <form
           
        >
            <label htmlFor='nombreCantante'> Nombre del cantante </label>
            <input
                type='text'
                placeholder='Nombre Cantante'
                id='nombreCantante'
                value={nombreCantante}
                onChange={e=>setNombreCantante(e.target.value)}
            />

            <label htmlFor='genero'>Genero  </label>
            <input
                type='text'
                placeholder='ingresar Genero'
                id='genero'
                value={genero}
                onChange={e=>setGenero(e.target.value)}
            />

            <button
             type='submit'
             onClick={validacion}
            >
                Enviar datos
            </button>
        </form>
    </div>
         <Card
             cantante = {nombreCantante}
             generoMusica = {genero}
            />
  
    </>
   
  );
}

export default App;
