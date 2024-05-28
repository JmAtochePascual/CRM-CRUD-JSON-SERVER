// Importaciones 
import {
  nombreInputElement,
  emailInputElement,
  telefonoInputElement,
  empresaInputElement,
  formularioElement
} from './selectores.js';

import {
  crearCliente,
  validarCliente,
  mostrarAlerta
} from './funciones.js';

import { agregarCliente } from './API.js';

// Inicializa la aplicación
const init = (event) => {
  event.preventDefault();

  const cliente = crearCliente();

  const esValido = validarCliente(cliente);

  if (!esValido) {
    mostrarAlerta(formularioElement, 'Todos los campos son obligatorios', false);
    return;
  }

  agregarCliente(cliente);
};


// Carga los eventos
document.addEventListener('DOMContentLoaded', () => {
  formularioElement.addEventListener('submit', init);
});