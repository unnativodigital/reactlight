import React, { useState } from 'react';
import './Semaforo.css';

export const Semaforo = () => {

  const [color, setColor] = useState('red'); // Estado INICIAL

  const handelClick = (nuevoColor) => { setColor(nuevoColor)};
  
  return (
    <div id="semaforo">
      <div className={`luz roja ${color === 'red' ? 'activa' : ''}`} onClick={() => handelClick('red')}></div>
      <div className={`luz amarilla ${color === 'yellow' ? 'activa' : ''}`} onClick={() => handelClick('yellow')}></div>
      <div className={`luz verde ${color === 'green' ? 'activa' : ''}`} onClick={() => handelClick('green')}></div>
    </div>
  );
};
