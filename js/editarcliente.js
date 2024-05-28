import {
  obtenerCliente,
  actualizarCliente
} from './API.js';

import {
  nombreInputElement,
  emailInputElement,
  telefonoInputElement,
  empresaInputElement,
  formularioElement
} from './selectores.js';

import { llenarInputsFormulario, obtenerIdClienteDesdeURL } from './funciones.js';

let clienteActualizado = {
  nombre: '',
  email: '',
  telefono: '',
  empresa: '',
  id: ''
};


// Llena los datos del cliente en el formulario
const llenarFormulario = async () => {
  const id = obtenerIdClienteDesdeURL();

  const cliente = await obtenerCliente(id)

  llenarInputsFormulario(cliente);

  clienteActualizado.id = id;
};


// Actualiza un cliente
const actualizar = async (event) => {
  event.preventDefault();

  clienteActualizado.nombre = nombreInputElement.value;
  clienteActualizado.email = emailInputElement.value;
  clienteActualizado.telefono = telefonoInputElement.value;
  clienteActualizado.empresa = empresaInputElement.value;

  actualizarCliente(clienteActualizado);
};

// Carga los eventos
document.addEventListener('DOMContentLoaded', () => {
  llenarFormulario();

  formularioElement.addEventListener('submit', actualizar);
});