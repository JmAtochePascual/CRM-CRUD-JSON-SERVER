// Vadlidar si los campos del formulario son diferentes de vacío
export const validarCliente = (datosCliente) => Object.values(datosCliente).every(dato => dato !== '');