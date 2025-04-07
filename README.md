API de Gestión de Eventos con Autenticación
Este es un proyecto de API RESTful para la gestión de eventos. La API permite la autenticación de usuarios, la gestión de eventos, y está protegida mediante JWT (JSON Web Tokens) para garantizar la seguridad de las rutas.

Características
Autenticación: Registro e inicio de sesión de usuarios con autenticación basada en JWT.

Gestión de eventos: Los usuarios pueden crear, leer, actualizar y eliminar eventos.

Seguridad: Implementación de protección de rutas utilizando roles y JWT.

Tecnologías
Node.js: Entorno de ejecución para JavaScript del lado del servidor.

Express.js: Framework para construir aplicaciones web con Node.js.

MongoDB: Base de datos NoSQL para almacenar los datos de la API.

JWT: Autenticación basada en JSON Web Tokens para asegurar las rutas.

Instalación
Para instalar este proyecto y ejecutarlo en tu máquina local, sigue estos pasos:

1. Clonar el repositorio

git clone https://github.com/YazAlvarado/autenticacion-seguridad-nodejs.git
cd autenticacion-seguridad-nodejs 2. Instalar las dependencias

npm install 3. Configurar las variables de entorno
Crea un archivo .env en la raíz del proyecto con las siguientes variables:
PORT=4000
MONGO_URI=tu_url_de_mongo_db
JWT_SECRET=tu_clave_secreta_para_jwt
Asegúrate de reemplazar tu_url_de_mongo_db con la URL de conexión de tu base de datos MongoDB y tu_clave_secreta_para_jwt con una clave secreta para firmar los tokens JWT.

4. Ejecutar el servidor
   npm start
   La API estará corriendo en http://localhost:4000.

Endpoints

1. Autenticación
   POST /api/auth/register - Registra un nuevo usuario.

POST /api/auth/login - Inicia sesión con el usuario registrado y devuelve un token JWT.

2. Eventos
   GET /api/events - Obtiene todos los eventos.

POST /api/events - Crea un nuevo evento (requiere autenticación).

PUT /api/events/:id - Actualiza un evento existente (requiere autenticación).

DELETE /api/events/:id - Elimina un evento (requiere autenticación).

Notas
Asegúrate de tener MongoDB ejecutándose y accesible a través de la URL configurada en el archivo .env.

Esta API utiliza autenticación JWT para asegurar las rutas de eventos. Necesitarás enviar el token en el encabezado Authorization como un Bearer Token para acceder a las rutas protegidas.
