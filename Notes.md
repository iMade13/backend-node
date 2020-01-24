*Http*: Una petición HTTP es un protocolo de comunicación que permite las transferencias de información en la web. Es el lenguaje común para todas las comunicaciones.
**¿Cómo es una petición?**
  GET /index.html HTTP/1.1
  Host: www.example.com
  Referer: www.google.com
  User-Agent: Mozilla/5.0
  Connection: keep-alive

**Puntos claves a tener en cuenta**:
    - Métodos: Qué quieres hacer
    - Estado: Cómo ha ido la operación
    - Cuerpo: Lo que el servidor devuelve

**Métodos HTTP**:
    - GET: Recoger información del servidor.
    - POST: Añadir información al servidor.
    - PUT: Reemplazar información en el servidor.
    - PATCH: Actualizar parte de la información.
    - DELETE: Eliminar información del servidor.
    - OPTIONS: Pedir información sobre métodos (saber si podemos ejecutar alguno de los   métodos anteriores).

*Las cabeceras*: serán el envío al servidor de cómo queremos hacer la petición.
  - Cabeceras: informacion contextual de la peticion (no es lo que quiero hacer si no como lo quiero realizar).
  - Request: el request púede ser POST, PUT, PATCH, Autentication, cache, condiciones, cors, cookies
  - Cookies: compartir informacion entre peticiones
  - Cors (cross Origin Resource Sharing) = compartir informacion afuera de nuestro    servidor (Access-Control-Allow-Origin) 
  - Accept: esta solo indica que contino va a aceptar (Accept, Accept-Charset, Accept-Encoding)
  - Autenticación: se asegura que puedes realizar una solicitud al servidor (Authorization).
  - Cache: gestiona por cuanto tiempo la respuesta sera la misma (Cache-Control, Expires)


*Los estados*: son números que indica el estado de la petición:
    2XX: Todo ha ido bien.
    3XX: La petición se ha redirigido.
    4XX: Errores del cliente.
    5XX: Ha habido un error al procesar la petición.

*El cuerpo de la petición*: es la información en sí que queremos enviar, editar o que el servidor nos devuelva.

*Las queries*: van a permitirte añadir información extra a los datos que queramos enviarle al servidor.

Iniciar con: npm init

************************************************************************

cache-control: para setear imagenes 
user-agent: para saber donde navega
accept y accept-encoding

¿Qué implica construir un backend?
R: 




