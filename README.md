# 📚 Gestión de Clientes

Esta aplicación web permite gestionar información de clientes utilizando una API simulada con json-server. Puedes agregar, editar, eliminar y listar clientes en una interfaz sencilla y eficiente.

**Nota:** Para el uso de este proyecto es muy importante contar con la instalación de json-server para poder usarlo.

## 🎯 Contenido

1. [📝 Características](#📝-características)
2. [🛠️ Tecnologías y Herramientas](#🛠️-tecnologías-y-herramientas)
3. [🚀 Estructura del Proyecto](#🚀-estructura-del-proyecto)
4. [🧑‍💻 Uso](#🧑‍💻-uso)
5. [🏗️ Contribución](#🏗️-contribución)
6. [✨ Licencia](#✨-licencia)
7. [🙈 Imagen de Referencia](#🙈-imagen-de-referencia)
8. [🌐 Ver Proyecto en la WEB](#🌐-ver-proyecto-en-la-web)

## 📝 Características

- **Agregar Cliente:** Permite agregar un nuevo cliente a la base de datos mediante un formulario.
- **Editar Cliente:** Llena los campos del formulario con los datos de un cliente para su edición.
- **Eliminar Cliente:** Elimina un cliente de la lista.
- **Listar Clientes:** Muestra una lista de todos los clientes en la interfaz.
- **Validación de Campos:** Verifica que todos los campos del formulario estén completos antes de enviar.
- **Alertas Personalizadas:** Muestra alertas para informar sobre acciones como agregar, editar o eliminar clientes.

## 🛠️ Tecnologías y Herramientas

- **HTML:** Estructura de la página.
- **CSS:** Estilos de la página.
- **JavaScript:** Lógica de la aplicación, incluyendo manipulación del DOM, validación y consultas a la API.
- **Tailwind CSS:** Framework CSS para estilos y componentes.
- **json-server:** Servidor para simular una API REST.

## 🚀 Estructura del Proyecto

- **css/**: Carpeta con los estilos.
- **js/**: Carpeta con la lógica del proyecto.
  - `app.js`: Archivo principal con la lógica de la aplicación.
  - `API.js`: Funciones para interactuar con la API.
  - `funciones.js`: Funciones auxiliares para validar y mostrar alertas.
  - `selectores.js`: Exportaciones de selectores DOM.
- **db.json**: Archivo de datos para json-server.
- **index.html**: Página principal.

## 🧑‍💻 Uso

### Requisitos

Para poder usar este proyecto es necesario instalar json-server. Puedes instalarlo globalmente usando npm:

```
npm install -g json-server
```

### Instrucciones

1. Clona el repositorio: git clone [URL del repositorio]
2. Navega a la carpeta del proyecto: cd [nombre del proyecto]
3. Inicia json-server para simular la API REST:

```
json-server --watch db.json --port 4000
```

4. Abre el archivo index.html en un navegador de tu elección.

## Solicitudes de API REST

El proyecto hace uso de las distintas solicitudes de API REST:

- GET: Obtener la lista de clientes y un cliente específico.
- POST: Agregar un nuevo cliente.
- PUT: Actualizar un cliente existente.
- DELETE: Eliminar un cliente de la lista.

## 🏗️ Contribución

Si estás interesado en contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu característica (`git checkout -b mi-nueva-característica`).
3. Compromete tus cambios (`git commit -am 'Añadir alguna característica'`).
4. Empuja la rama (`git push origin mi-nueva-característica`).
5. Abre un pull request.

## ✨ Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

## 🙈 Imagen de Referencia

![Imagen de Referencia](https://i.postimg.cc/wBWmdkBP/CRM-JSON-SERVER.png)

## 🌐 Ver Proyecto en la WEB

Puedes ver el proyecto en funcionamiento [aquí](https://jmatochepacual.github.io/CRM-CRUD-JSON-SERVER/).

Todos los derechos reservados Gestión de Clientes 2024 ©.
