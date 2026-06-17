import React from "react";
import '../css/Testimonio.css';

// exportaicon nombrada
// export function Testimonio(){
function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img 
      className="imagen-testimonio"
      src={require(`../img/test-0${props.imagen}.png`)}
      alt="Foto de Emma" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-test">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-test">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-test">"{props.testimonio}"</p>
      </div>

    </div>
  );
}

// exportar es importar (exportaicon por defecto)
export default Testimonio;