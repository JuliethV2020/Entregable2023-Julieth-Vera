//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({cantante,generoMusica}) {
  return (
    <div>
      <h4> El cantante ingresado es:  {cantante}</h4>
      
      <h4> Quien se caracteriza por su genero musical: {generoMusica}</h4>
    </div>
  );
}

export default Card;
