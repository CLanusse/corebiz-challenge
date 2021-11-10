# Corebiz Challenge

El sitio se crea usando React. Consta de vista principal y página con el resumen de compra.
Los productos se listan llamando a la API al momento de carga. El buscador funciona correctamente por nombre de producto.
Los botones de compra agregan una unidad al carrito. Aumentar o disminuir la cantidad de los productos es posible desde la vista del carrito en la ruta /cart. El carrito persiste al actualizar la página mediante localStorage.
Todo el control de estado se hace con Redux (carrito, listado de productos, momentos de carga).
El diseño y estilado de la página se hizo personalmente con Sass, salvo algunos pocos componentes incorporados con Material UI. Se importa bootstrap para que queden estiladas las alertas de SweetAlert.
Se omite la implementación de los carruseles, tanto en el banner como el listado de productos. El resto está todo funcional.
El formulario de Newsletter y sus validaciones se desarrollan con Formik y Yup.
Se utiliza AXIOS para peticiones a la API.

Versión de producción compilada con a través de react (npm run build)

## Librerías utilizadas

- React Redux / Thunk
- React Router DOM 
- Sweet Alert 2
- Material UI
- Node Sass
- Axios
- Formik / Yup

## Compilación

Para levantar el proyecto en localhost ejecutar 'npm start'.
Para compilar a producción utilizar 'npm run build'

### Desarrollado por
Conrado Lanusse, para Corebiz

- https://github.com/CLanusse
- https://www.linkedin.com/in/conradolanusse/
- conrado.lanusse@gmail.com



