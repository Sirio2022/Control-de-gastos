import React, { useEffect, useState } from 'react';

export default function ControlPresupuesto({ presupuesto, gastos }) {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce((acc, gasto) => acc + gasto.cantidad, 0);
    setDisponible(presupuesto - totalGastado);
    setGastado(totalGastado);
    return () => {
      //console.log(totalGastado);
    };
  }, [gastos, presupuesto, disponible, gastado]);

  function formaterCantidad(cantidad) {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

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
          {formaterCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span>
          {formaterCantidad(gastado)}
        </p>
      </div>
    </div>
  );
}
