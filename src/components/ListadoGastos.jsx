import React from 'react';
import Gasto from './Gasto';

export default function ListadoGastos({ gastos, setGastoEditar }) {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? 'Gastos' : 'No hay ningún gasto'}</h2>
      {gastos.map((gasto) => (
        <Gasto key={gasto.id} gasto={gasto} setGastoEditar={setGastoEditar} />
      ))}
    </div>
  );
}
