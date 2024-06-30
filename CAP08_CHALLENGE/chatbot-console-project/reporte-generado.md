# Reporte de Desarrollo: Chatbot de Consola con Capacidad de Búsqueda en Internet

## Introducción

Este reporte detalla el proceso de desarrollo de un chatbot de consola con capacidad de búsqueda en Internet, utilizando TypeScript, Jest para pruebas, y APIs externas como Groq y Serper.dev para búsquedas en Google.

## Proceso de Desarrollo

### Configuración Inicial

1. El desarrollador comenzó solicitando una estructura de carpetas y configuración de librerías para el proyecto.
2. Se proporcionó una estructura básica, incluyendo configuraciones para TypeScript y Jest.

### Técnica de Prompting

El desarrollador utilizó una técnica de prompting efectiva:

- Solicitó información paso a paso, permitiendo una construcción gradual del proyecto.
- Pidió clarificaciones cuando era necesario, como con la configuración de Jest.
- Proporcionó retroalimentación sobre errores encontrados, permitiendo ajustes precisos.

### Implementación del Código

1. Se comenzó con la implementación de los archivos principales:
   - Configuración (`config.ts`)
   - Servicio de búsqueda de Google (`googleSearch.ts`)
   - Modelo de conversación (`conversation.ts`)
   - Lógica principal del chatbot (`chatbot.ts`)
   - Punto de entrada de la aplicación (`index.ts`)

2. El desarrollador solicitó scripts para ejecutar el proyecto, mostrando un enfoque práctico.

### Desarrollo de Pruebas

1. Se inició con la suite de pruebas para `googleSearch.ts`.
2. Se encontraron problemas de configuración con Jest, que fueron resueltos mediante ajustes en la configuración de Babel y TypeScript.
3. Se continuó con pruebas para la clase `Conversation`.
4. Finalmente, se desarrollaron pruebas para el componente principal `chatbot.ts`.

### Resolución de Problemas

- El desarrollador proporcionó mensajes de error detallados, facilitando la identificación y resolución de problemas.
- Se realizaron ajustes en la configuración de Jest y en los mocks para las pruebas del chatbot.

## Conclusión

El proceso de desarrollo demostró un enfoque metódico y estructurado. La técnica de prompting del desarrollador fue efectiva, solicitando información específica y proporcionando retroalimentación clara sobre los problemas encontrados. Esto permitió un desarrollo iterativo y la resolución eficiente de problemas.

El proyecto resultante es un chatbot de consola funcional con capacidad de búsqueda en Internet, pruebas unitarias completas y una estructura de código bien organizada.
