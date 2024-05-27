// Importaciones 
import {
  nombreInputElement,
  emailInputElement,
  telefonoInputElement,
  empresaInputElement,
  formularioElement
} from './selectores.js';

import {
  validarCliente,
  mostrarAlerta
} from './funciones.js';

import { agregarCliente } from './API.js';

// Inicializa la aplicación
const init = (event) => {
  event.preventDefault();

  const datosCliente = {
    nombre: nombreInputElement.value.trim(),
    email: emailInputElement.value.trim(),
    telefono: telefonoInputElement.value.trim(),
    empresa: empresaInputElement.value.trim()
  };

  const esValido = validarCliente(datosCliente);

  if (!esValido) {
    mostrarAlerta(formularioElement, 'Todos los campos son obligatorios', false);
    return;
  }

  agregarCliente(datosCliente);
};


// Carga los eventos
document.addEventListener('DOMContentLoaded', () => {
  formularioElement.addEventListener('submit', init);
});