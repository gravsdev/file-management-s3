# Documentación de la API

- [Gestión de Archivos](FileManagement.md)
- [Gestión de Imagenes](ImageManagement.md)

## Autenticación

Para autenticar las solicitudes a esta API, debes construir un token JWT utilizando las credenciales de AWS S3. El token JWT se debe incluir en el encabezado `SecretKeyS3` en cada solicitud.

## Construcción del Token JWT

El token JWT debe contener información que permita verificar la autenticidad de la solicitud. Debes incluir las credenciales de tu servidor S3 de AWS en el token. Asegúrate de utilizar una biblioteca JWT para crear y verificar tokens JWT.

Aquí tienes un ejemplo de cómo podrías construir un token JWT en Node.js utilizando la biblioteca jsonwebtoken:

```javascript
const jwt = require("jsonwebtoken");

const payload = {
  region: AWS_BUCKET_REGION,
  bucket: AWS_BUCKET_NAME,
  accessKeyId: AWS_PUBLIC_KEY,
  secretAccessKey: AWS_SECRET_KEY,
};
const token = jwt.sign(payload, SECRET_KEY_S3);
```

Asegúrate de firmar el token con un secreto seguro y de incluir la información necesaria para verificar la autenticidad de la solicitud.

## Inclusión del Token en las Solicitudes

En cada solicitud a la API, debes incluir el token JWT en el encabezado `SecretKeyS3`. Por ejemplo:

```http
SecretKeyS3: <tu-token-construido>
```

Asegúrate de que el token sea válido y de que las credenciales incluidas en el token se utilicen para autenticar las solicitudes a AWS S3.

## Respuestas de la API

La API responderá con códigos de estado HTTP y mensajes informativos. Aquí hay algunos ejemplos:

- **`200 OK`**: La solicitud se ha completado con éxito.
- **`201 Created`**: Un nuevo pedido ha sido registrado.
- **`400 Bad Request`**: La solicitud es inválida o faltan parámetros.
- **`401 Unauthorized`**: La solicitud no está autorizada.
- **`403 Forbidden`**: El acceso a este recurso está prohibido.
- **`404 Not Found`**: El pedido especificado no se encontró.
- **`500 Internal Server Error`**: Ha ocurrido un error en el servidor.
