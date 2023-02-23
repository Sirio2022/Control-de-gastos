import React from 'react';
import Gasto from './Gasto';

export default function ListadoGastos({
  gastos,
  setGastoEditar,
  elinimarGasto,
  gastosFiltrados,
  filtro,
}) {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length
              ? 'Gastos'
              : 'No hay ningún gasto en esta categoría'}
          </h2>

          {gastosFiltrados.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              elinimarGasto={elinimarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? 'Gastos' : 'No hay ningún gasto'}</h2>

          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              elinimarGasto={elinimarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
}
