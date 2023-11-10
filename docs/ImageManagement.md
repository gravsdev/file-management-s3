# Gestión de Imagenes

- [Subir una sola imagen](#subir-una-sola-imagen)
- [Subir varias imágenes](#subir-varias-imágenes)

## Subir una sola imagen

Para cargar una nueva imagen de usuario, realiza una solicitud POST a la siguiente ruta:

```bash
POST /s3/image/up/single
```

**Parámetros de la Solicitud:**

A continuación, se describen los parámetros necesarios para realizar la solicitud:

- `image`: El archivo de imagen que se subirá. Asegúrate de que el archivo esté en un formato de imagen admitido, como JPEG, JPG, PNG, SVG, o GIF.

**Solicitud utilizando CURL:**

Puedes realizar la solicitud utilizando Curl de la siguiente manera. Asegúrate de pasar el [token construido con las credenciales correctas](API.md#construcción-del-token-jwt):

```bash
curl -X POST -H "SecretKeyS3: <tu-token-construido>" -F "image=@/ruta/de/imagen" http://localhost:3000/s3/image/up/single
```

Si la solicitud fue exitosa, recibirás el nombre de la imagen con el cual se almacenó en el servidor de S3.

## Subir varias imágenes

Para cargar varias imágenes de usuario, realiza una solicitud POST a la siguiente ruta:

```bash
POST /s3/image/up/multiple
```

**Parámetros de la Solicitud:**

A continuación, se describen los parámetros necesarios para realizar la solicitud:

- `images`: Una matriz de archivos de imagen que se subirán. Asegúrate de que los archivos estén en un formato de imagen admitido, como JPEG, JPG, PNG, SVG, o GIF.

**Solicitud utilizando CURL:**

Puedes realizar la solicitud utilizando Curl de la siguiente manera. Asegúrate de pasar el [token construido con las credenciales correctas](API.md#construcción-del-token-jwt):

```bash
curl -X POST -H "SecretKeyS3: <tu-token-construido>" -F "images=@/ruta/de/imagen1" -F "images=@/ruta/de/imagen2" http://localhost:3000/s3/image/up/multiple
```

Si la solicitud es exitosa, recibirás información sobre las imágenes que se han almacenado en el servidor de S3. Asegúrate de que el token JWT sea válido y que tengas los permisos necesarios para realizar esta acción.

## Notas Adicionales:

- Asegúrate de que el token JWT proporcionado en el encabezado sea válido y tenga los permisos adecuados para cargar imágenes.

- Verifica que el formato de los archivos de imagen sea compatible con los formatos admitidos (JPEG, JPG, PNG, SVG, GIF).

- La carga de imágenes se realiza mediante el uso de `multipart/form-data`, así que configura tu solicitud en consecuencia.
