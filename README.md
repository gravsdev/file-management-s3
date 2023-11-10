# Servicio de Gestión de Archivos con S3

<img src="https://skillicons.dev/icons?i=nodejs,express,aws" />

Esta API le permite cargar, listar, descargar y obtener URL de archivos almacenados en el servicio de almacenamiento en la nube de Amazon S3. Para utilizar la API, debes incluir un token JWT válido en el encabezado `secret-key-s3` en cada solicitud.

- [Requisitos](#requisitos)
- [Configuración](#configuración)
- [Uso](#uso)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Requisitos

Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

- `Node.js` debe estar instalado en tu sistema.
- Asegúrate de tener un gestor de paquetes de Node instalado, como `npm`, `yarn` o `pnpm`.
- Debes tener configurado y en funcionamiento tu `Servicio S3` para el almacenamiento en la nube de archivos.

## Configuración

1. **Clonar el Repositorio:**

   Para comenzar, clona el repositorio en tu entorno de desarrollo utilizando el siguiente comando:

   ```bash
   git clone https://github.com/gravsdev/file-management-s3.git
   ```

2. **Instalar Dependencias:**

   Una vez que hayas clonado el repositorio, instala las dependencias requeridas mediante npm:

   ```bash
   npm install
   ```

3. **Configuración de Variables de Entorno:**

   La configuración de la aplicación se gestiona a través de variables de entorno. Para asegurarte de que la aplicación funcione correctamente, configura las siguientes variables de entorno antes de iniciarla:

   - `SERVER_PORT`: Define el puerto en el cual el servidor se ejecutará.
   - `ALLOWED_ORIGINS`: Define los dominios o URL permitidos que pueden acceder a tu API.
   - `ALLOWED_METHODS`: Define los métodos HTTP permitidos para las solicitudes a tu API.
   - `ALLOWED_HEADERS`: Especifica los encabezados HTTP que se permiten en las solicitudes.
   - `SECRET_KEY`: Debe ser una cadena segura y secreta para garantizar la seguridad de la autenticación en tu aplicación.

   Puedes configurar estas variables de entorno en un archivo `.env` en la raíz del proyecto, puedes modificar el archivo _`.env.example`_. Asegúrate de proporcionar la información correcta en estas variables de entorno para que la aplicación funcione según tus necesidades.

4. **Crear Directorio para Almacenar Imágenes Temporales:**

   Crea un directorio en la raíz del proyecto con el nombre `uploads`.

5. **Iniciar la Aplicación:**

   Con la configuración de las variables de entorno completada, puedes iniciar la aplicación ejecutando el siguiente comando:

   ```bash
   npm start
   ```

   La aplicación estará lista para recibir solicitudes una vez que se haya iniciado con éxito.

   Recuerda mantener seguras tus variables de entorno y no compartirlas en repositorios públicos.

## Uso

- [Documentación de la API](docs/API.md)

## Contribuciones

Si deseas contribuir a este proyecto, por favor abre un problema o envía una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE.md) para obtener más detalles.

## Contacto

Si tienes preguntas o necesitas ayuda, no dudes en contactarnos:

- Sitio web : [novacors.pe](https://www.novacors.pe)
- Correo electrónico: [contacto@novacors.pe](mailto:contacto@novacors.pe)

¡Gracias por usar este proyecto API REST de Servicio de Gestión de Archivos con S3!
