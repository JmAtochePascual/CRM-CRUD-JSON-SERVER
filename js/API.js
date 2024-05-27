import { mostrarAlerta } from './funciones.js';
import { formularioElement } from './selectores.js';

export const agregarCliente = async (cliente) => {
  const URL = 'http://localhost:4000/clientes';

  try {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    mostrarAlerta(formularioElement, 'Cliente agregado correctamente');

    window.location.href = 'index.html';

  } catch (error) {
    console.log(error, 'Error al agregar cliente en la API');
  }
};