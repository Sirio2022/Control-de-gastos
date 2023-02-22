import React from 'react';

export default function ControlPresupuesto({ presupuesto }) {
  const formaterCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>Aqui va la gráfica</div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formaterCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>
          {formaterCantidad(0)}
        </p>
        <p>
          <span>Gastado: </span>
          {formaterCantidad(0)}
        </p>
      </div>
    </div>
  );
}
