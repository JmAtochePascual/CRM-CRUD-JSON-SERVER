// Vadlidar si los campos del formulario son diferentes de vacío
export const validarCliente = (datosCliente) => Object.values(datosCliente).every(dato => dato !== '');


// Muestra un mensaje de alerta
export const mostrarAlerta = (contenedor, mensaje, tipo = true) => {
  // Si ya hay una alerta, no mostrar otra
  if (contenedor.querySelector('.alerta')) {
    return;
  }

  const alerta = document.createElement('p');
  alerta.textContent = mensaje;
  alerta.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'alerta');

  tipo
    ? alerta.innerHTML = `<strong class="font-bold">Correcto!</strong> ${mensaje}`
    : alerta.innerHTML = `<strong class="font-bold">Error!</strong> ${mensaje}`;

  tipo
    ? alerta.classList.add('bg-green-100', 'border-green-500', 'text-green-700')
    : alerta.classList.add('bg-red-100', 'border-red-500', 'text-red-700');

  contenedor.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 3000);
};