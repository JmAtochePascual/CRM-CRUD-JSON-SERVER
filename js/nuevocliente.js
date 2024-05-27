// Importaciones 
import {
  nombreInputElement,
  emailInputElement,
  telefonoInputElement,
  empresaInputElement,
  formularioElement
} from './selectores.js';

import { validarCliente } from './funciones.js';

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
    console.log('Cliente inválido');
    return;
  }

  console.log('Cliente válido');
};

// Carga los eventos
document.addEventListener('DOMContentLoaded', () => {
  formularioElement.addEventListener('submit', init);
});