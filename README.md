# Gestor de Llegada de Unidades de Camión

Aplicación web desarrollada con React, Vite y Tailwind, diseñada para

**registrar y gestionar la llegada de unidades de camión** a diferentes carriles de una central.

## Funcionalidades Principales:

### Registro de Unidades:

* Permite ingresar información detallada de cada unidad conforme llega:
    * **Nombre de la Unidad**
    * **Ruta asignada**
    * **Hora de llegada**
    * **Carril** al que se dirige (de un total de **5 carriles disponibles**).

* Controla que **cada carril no exceda un límite de 5 unidades**.

### Visualización en Tabla Dinámica:

* Las unidades registradas se muestran **en tiempo real** en una tabla organizada por carriles.

* Cada **carril funciona como una columna** donde se apilan las unidades que le han sido asignadas.

* Para cada unidad en la tabla, se visualiza su:
    * **Nombre**
    * **Ruta**
    * **Hora de llegada**

* Ofrece la posibilidad de **editar la información** (unidad, ruta, hora) de cualquier registro a través de un **modal interactivo**.

* Permite **eliminar unidades individualmente** de la tabla.

* Incluye una opción para **vaciar completamente la tabla** de registros.

### Consulta de Rutas:

* Al **buscar una ruta**, la aplicación muestra **tarjetas informativas** con los detalles de todas las unidades que corresponden a esa ruta:
    * **Unidad**
    * **Ruta**
    * **Carril**
    * **Hora de llegada**

* Si la **ruta consultada no ha llegado o no se encuentra registrada**, se muestra un mensaje indicándolo.


---


**React + Vite + Tailwind CSS**


Always follow below steps to Install React


**Build Project**


https://vite.dev/guide/


npm create vite@latest ...


0. Create Location
1. npm install -g create-vite | (Only one time)
2. npx create-vite@latest test-project --template react
3. cd test-project
4. npm install
5. npm run dev
6. git init

---

**Install Tailwind CSS as a Vite plugin**


https://tailwindcss.com/docs/installation/using-vite


1. npm install tailwindcss @tailwindcss/vite
2. In file vite.config.js
   Add below code
   import tailwindcss from "@tailwindcss/vite";
   In the same code add
   plugins: [react(), tailwindcss()],
3. In file index.css
   @import "tailwindcss";
4. In file main.jsx
   import "./index.css";
   npm run dev

---

**Just in my case**


Will appear below issue


error when starting dev server: Error: EPERM: operation not permitted, rmdir 'C:...test-project\node_modules\.vite\deps'


Due to we have @ and space between words


**Solution**


1. rm -rf node_modules
2. npm i
