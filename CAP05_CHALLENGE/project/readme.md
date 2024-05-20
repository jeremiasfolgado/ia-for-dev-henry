# Proyecto ME-COM

## Descripción del Proyecto

ME-COM es un proyecto innovador que busca proporcionar una solución integral para la gestión y análisis de datos. Su objetivo principal es simplificar el proceso de recopilación, procesamiento y visualización de información, permitiendo a los usuarios tomar decisiones informadas de manera eficiente.

Una de las características destacadas de ME-COM es su capacidad para integrar datos de múltiples fuentes y formatos, lo que permite una visión unificada y coherente de la información. Además, el proyecto incorpora técnicas avanzadas de análisis de datos, como aprendizaje automático y procesamiento del lenguaje natural, para extraer insights valiosos y generar predicciones precisas.

## Explicación Técnica

ME-COM se basa en una arquitectura de microservicios, lo que permite una alta escalabilidad y flexibilidad. El proyecto utiliza las siguientes tecnologías clave:

- **Python**: El lenguaje de programación principal utilizado en el backend de la aplicación.
- **FastAPI**: Un framework web rápido y moderno para construir APIs robustas y eficientes.
- **Streamlit**: Una biblioteca de Python para crear interfaces de usuario interactivas y atractivas.
- **Redis**: Una base de datos en memoria utilizada como caché para mejorar el rendimiento de la aplicación.
- **Docker**: Una plataforma de contenedores que permite empaquetar y desplegar la aplicación de manera consistente en diferentes entornos.

## Pasos para Configurar Variables de Entorno

Para que ME-COM funcione correctamente, es necesario configurar las siguientes variables de entorno que puede tomar de ejemplo del archivo .env.example ubicado en la raiz del directorio /project :

1. HEADER_ACCEPT_ENCODING="gzip"
2. HEADER_USER_AGENT="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 (gzip)"
3. GOOGLE_API_HOST="https://www.googleapis.com/customsearch/v1?"
4. GOOGLE_FIELDS="items(title, displayLink, link, snippet,pagemap/cse_thumbnail)"
5. GOOGLE_API_KEY=
6. GOOGLE_CX=
7. OPENAI_API_KEY=

Para configurar estas variables, siga los siguientes pasos:

1. Cree un archivo llamado `.env` en la raíz del proyecto.
2. Abra el archivo `.env` y agregue las variables de entorno con sus respectivos valores, siguiendo el formato `VARIABLE=valor`.
3. Guarde el archivo `.env` y asegúrese de no compartirlo públicamente, ya que puede contener información sensible.

## Pasos para Correr la Aplicación Localmente

Para ejecutar ME-COM de manera local, siga estos pasos:

1. Asegúrese de tener Docker instalado en su sistema.
2. Clone el repositorio del proyecto desde [URL del repositorio].
3. Navegue hasta el directorio raíz del proyecto.
4. Configure las variables de entorno como se describió anteriormente.
5. Abra una terminal y ejecute el siguiente comando: `docker-compose up`.
6. Espere a que Docker descargue las imágenes necesarias y inicie los contenedores.
7. Una vez que los contenedores estén en funcionamiento, podrá acceder a la aplicación a través de los siguientes puertos:
   - Orchestrator: `http://localhost:8000`
   - Frontend: `http://localhost:8501`
   - Cache (Redis): `http://localhost:6379`

## Definición OpenAPI de la API

ME-COM genera automáticamente la documentación OpenAPI para su API. Para acceder a la documentación:

1. Asegúrese de que la aplicación esté en ejecución localmente.
2. Abra un navegador web y vaya a `http://localhost:8000/docs`.
3. Verá la interfaz de Swagger UI, que proporciona una descripción detallada de los endpoints disponibles, sus parámetros y respuestas esperadas.

La documentación OpenAPI es una herramienta valiosa para comprender y utilizar la API de ME-COM. Permite a los desarrolladores explorar los endpoints disponibles, probar las solicitudes y ver los formatos de respuesta. Además, la documentación OpenAPI se puede utilizar para generar código de cliente en diferentes lenguajes de programación, lo que facilita la integración con otras aplicaciones.
