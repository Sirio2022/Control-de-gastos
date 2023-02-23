import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ControlPresupuesto({ presupuesto, gastos }) {
  const [porcentaje, setPorcentaje] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce((acc, gasto) => acc + gasto.cantidad, 0);

    const totalDisponible = presupuesto - totalGastado;
    const porcentajeGastado = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setDisponible(totalDisponible);
    setGastado(totalGastado);
    setTimeout(() => {
      setPorcentaje(porcentajeGastado);
    }, 1000);
    console.log(porcentajeGastado);
    return () => {
      //console.log(porcentajeGastado);
    };
  }, [gastos]);

  function formaterCantidad(cantidad) {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          styles={buildStyles({
            pathColor: '#3B82F6',
            trailColor: '#f5f5f5',
            textColor: '#3B82F6',
          })}
          text={`${porcentaje}% gastado`}
        />
      </div>
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
