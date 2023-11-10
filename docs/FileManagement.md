# Gestión de Archivos

- [Obtener todos los archivos](#obtener-todos-los-archivos-de-s3)
- [Obtener enlace de un archivo](#obtener-enlace-de-un-archivo-de-s3)
- [Eliminar un archivo](#eliminar-un-archivo-de-s3)

## Obtener todos los archivos de S3

Para obtener la lista de todos los archivos almacenados en el servidor de S3, realiza una solicitud GET a la siguiente ruta:

```bash
GET /s3/file/all
```

**Parámetros de la Solicitud:**

No se requieren parámetros adicionales para esta solicitud.

**Solicitud utilizando CURL:**

Puedes realizar la solicitud utilizando Curl de la siguiente manera. Asegúrate de pasar el [token construido con las credenciales correctas](API.md#construcción-del-token-jwt):

```bash
curl -X GET -H "SecretKeyS3: <tu-token-construido>" http://localhost:3000/s3/file/all
```

Si la solicitud es exitosa, recibirás una lista con la información de todos los archivos almacenados en el servidor de S3.

**Respuesta Exitosa:**

```json
[
  {
    "Key": "nombre-de-la-imagen-1.jpg",
    "LastModified": "2023-01-01T12:00:00Z",
    ...
  },
  // ... más archivos ...
]
```

En caso de un error durante la obtención de la lista de archivos, recibirás una [respuesta con el código de estado](API.md#respuestas-de-la-api) correspondiente y un mensaje de error descriptivo.

## Obtener enlace de un archivo de S3

Para obtener el enlace de descarga de un archivo específico almacenado en el servidor de S3, realiza una solicitud GET a la siguiente ruta:

```bash
GET /s3/file/url/:filename
```

**Parámetros de la Solicitud:**

- `:filename`: El nombre del archivo del cual deseas obtener el enlace de descarga.

**Solicitud utilizando CURL:**

Puedes realizar la solicitud utilizando Curl de la siguiente manera. Asegúrate de pasar el [token construido con las credenciales correctas](API.md#construcción-del-token-jwt):

```bash
curl -X GET -H "SecretKeyS3: <tu-token-construido>" http://localhost:3000/s3/file/url/imagen1.jpg
```

Si la solicitud es exitosa, recibirás el enlace de descarga directa del archivo.

**Respuesta Exitosa:**

```json
{
  "fileUrl": "https://tu-bucket-s3.s3.amazonaws.com/imagen1.jpg"
}
```

En caso de un error durante la obtención de la lista de archivos, recibirás una [respuesta con el código de estado](API.md#respuestas-de-la-api) correspondiente y un mensaje de error descriptivo.

## Eliminar un archivo de S3

Para eliminar un archivo específico almacenado en el servidor de S3, realiza una solicitud DELETE a la siguiente ruta:

```bash
DELETE /s3/file/rm/:filename
```

**Parámetros de la Solicitud:**

- `:filename`: El nombre del archivo que deseas eliminar.

**Solicitud utilizando CURL:**

Puedes realizar la solicitud utilizando Curl de la siguiente manera. Asegúrate de pasar el [token construido con las credenciales correctas](API.md#construcción-del-token-jwt):

```bash
curl -X DELETE -H "SecretKeyS3: <tu-token-construido>" http://localhost:3000/s3/file/rm/imagen1.jpg
```

Si la solicitud es exitosa, recibirás un mensaje indicando que el archivo ha sido eliminado.

**Respuesta Exitosa:**

```json
{
  "message": "Archivo eliminado exitosamente."
}
```

En caso de un error durante la obtención de la lista de archivos, recibirás una [respuesta con el código de estado](API.md#respuestas-de-la-api) correspondiente y un mensaje de error descriptivo.
