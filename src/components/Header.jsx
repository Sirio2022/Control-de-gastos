import React from 'react';
import ControlPresupuesto from './ControlPresupuesto';
import NuevoPresupuesto from './NuevoPresupuesto';

export default function Header({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  gastos,
}) {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto 
        gastos={gastos}
        presupuesto={presupuesto} />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
}
