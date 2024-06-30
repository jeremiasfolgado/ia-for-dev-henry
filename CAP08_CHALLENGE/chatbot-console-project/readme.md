# Chatbot de Consola con Búsqueda en Internet

## Descripción del Proyecto

Este proyecto es un chatbot de consola con capacidad de búsqueda en Internet, desarrollado como parte del curso "IA for Devs" de Henry. El chatbot utiliza tecnologías de procesamiento de lenguaje natural y APIs de búsqueda para proporcionar respuestas informativas basadas en consultas en tiempo real.

Características principales:
- Interfaz de consola para interacción con el usuario
- Búsqueda en Internet utilizando la API de Serper.dev
- Procesamiento de lenguaje natural con Groq
- Respuestas en streaming para una experiencia de usuario fluida
- Citación de fuentes para proporcionar información verificable

## Tecnologías

- TypeScript
- Node.js
- Groq SDK para procesamiento de lenguaje natural
- Serper.dev API para búsquedas en Google
- Axios para peticiones HTTP
- Jest para pruebas unitarias
- Babel para transpilación

## Cómo Levantar el Proyecto

1. Clonar el repositorio:

git clone [URL_DEL_REPOSITORIO] cd [NOMBRE_DEL_DIRECTORIO]


2. Instalar dependencias:

````
npm install
````


3. Configurar variables de entorno:
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

````
GROQ_API_KEY=tu_clave_api_de_groq SERPER_API_KEY=tu_clave_api_de_serper
````

4. Ejecutar el proyecto:

````
npm start
````

5. Para ejecutar las pruebas:
````
npm test
````

## FAQ

### ¿Cómo obtengo las claves API necesarias?

- Para Groq: Visita [https://www.groq.com/](https://www.groq.com/) y regístrate para obtener una clave API.
- Para Serper.dev: Ve a [https://serper.dev/](https://serper.dev/) y crea una cuenta para obtener tu clave API.

### ¿Puedo usar este chatbot en producción?

Este proyecto fue desarrollado con fines educativos. Para un uso en producción, se recomienda implementar medidas adicionales de seguridad y optimización.

### ¿Cómo puedo contribuir al proyecto?

Las contribuciones son bienvenidas. Por favor, crea un 'fork' del repositorio, realiza tus cambios en una nueva rama y envía un 'pull request' para revisión.

### ¿Qué hago si encuentro un error?

Si encuentras un error, por favor crea un 'issue' en el repositorio de GitHub con una descripción detallada del problema y los pasos para reproducirlo.

### ¿Hay límites en las API utilizadas?

Sí, tanto Groq como Serper.dev tienen límites en sus APIs gratuitas. Consulta la documentación de cada servicio para conocer los límites actuales y las opciones de planes pagos si necesitas mayor capacidad.
