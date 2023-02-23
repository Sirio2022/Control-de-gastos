import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Swal from 'sweetalert2';

export default function ControlPresupuesto({
  presupuesto,
  gastos,
  setGastos,
  setPresupuesto,
  setIsValidPresupuesto,
}) {
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

  // const handleResetApp = () => {
  //   const resultado = confirm('¿Estás seguro de eliminar el presupuesto?');
  //   if (resultado) {
  //     setPresupuesto(0);
  //     setGastos([]);
  //     setIsValidPresupuesto(false);
  //   }
  // };

  const handleResetApp = () => {
    Swal.fire({
      title: '¿Estás seguro de eliminar el presupuesto?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showDenyButton: true,
      denyButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Presupuesto eliminado', '', 'success');
        setPresupuesto(0);
        setGastos([]);
        setIsValidPresupuesto(false);
      } else if (result.isDenied) {
        Swal.fire('Acción cancelada', '', 'info');
      }
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#f5f5f5',
            textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
          })}
          text={`${porcentaje}% gastado`}
        />
      </div>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear la APP
        </button>
        <p>
          <span>Presupuesto: </span>
          {formaterCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
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
