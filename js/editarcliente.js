import {
  obtenerCliente,
  actualizarCliente
} from './API.js';

import {
  formularioElement
} from './selectores.js';

import {
  llenarInputsFormulario,
  obtenerIdClienteDesdeURL,
  crearCliente,
  validarCliente,
  mostrarAlerta
} from './funciones.js';


// Llena los datos del cliente en el formulario
const llenarFormulario = async () => {
  const id = obtenerIdClienteDesdeURL();

  const cliente = await obtenerCliente(id)

  llenarInputsFormulario(cliente);
};


// Actualiza un cliente
const actualizar = async (event) => {
  event.preventDefault();

  const clienteActualizado = crearCliente();
  clienteActualizado.id = obtenerIdClienteDesdeURL();

  const esValido = validarCliente(clienteActualizado);

  if (!esValido) {
    mostrarAlerta(formularioElement, 'Todos los campos son obligatorios', false);
    return;
  };

  actualizarCliente(clienteActualizado);
};

// Carga los eventos
document.addEventListener('DOMContentLoaded', () => {
  llenarFormulario();

  formularioElement.addEventListener('submit', actualizar);
});