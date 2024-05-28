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

let clienteActualizado = {
  nombre: '',
  email: '',
  telefono: '',
  empresa: '',
  id: ''
};


// Llena los datos del cliente en el formulario
const llenarDatosCliente = async () => {
  const parametrosURL = new URLSearchParams(window.location.search);

  const idCliente = parametrosURL.get('id');

  const cliente = await obtenerCliente(idCliente)
  const { nombre, email, telefono, empresa } = cliente;

  nombreInputElement.value = nombre;
  emailInputElement.value = email;
  telefonoInputElement.value = telefono;
  empresaInputElement.value = empresa;

  clienteActualizado.id = idCliente;
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
  llenarDatosCliente();
  formularioElement.addEventListener('submit', actualizar);
});