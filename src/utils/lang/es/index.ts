export const ERROR_COMMAND = {
  NOT_FOUND: 'comando no encontrado:',
};

export const HELP_COMMAND = {
  DESCRIPTION: `Portafolio con Terminal Interactiva versión v1.0.0 <br />Desarrollado con React 18 y tailwindcss`,
  CLEAR_DESCRIPTION: 'Limpiar la pantalla de la terminal.',
  HELP_DESCRIPTION: 'Mostrar una lista de los comandos disponibles.',
  HISTORY_DESCRIPTION: 'Ver el historial de comandos.',
  LANG_DESCRIPTION: 'Listar o cambiar el idioma de la terminal.',
  PROJECTS_DESCRIPTION: 'Mostrar un resumen de mi participación en proyectos relevantes.',
  RESUME_DESCRIPTION: 'Mostrar un resumen de mí.',
  SKILLS_DESCRIPTION: 'Listar una lista de mis habilidades y herramientas.',
  SOCIAL_DESCRIPTION: 'Mostar Links de mis redes sociales.',
  TITLE: 'comandos:',
  WELCOME_DESCRIPTION: 'Mostrar el mensaje de bienvenida.'
};

export const LANG_COMMAND = {
  CHANGED: 'Idioma cambiado a Español',
  DESCRIPTION: `Selecciona un idioma de la siguiente lista`,
  NOT_IMPLEMENTED: 'El idioma seleccionado no está implementado.',
  TITLE: 'idiomas:',
  FOOTER: `Escribe '<span class="command text-shadow">lang</span> [selección]'.`
};

export const PROJECTS_COMMAND = {
  HARVEST_DATE: '2021, Chile',
  HARVEST_DESCRIPTION: `Aplicación móvil usada para la cosecha en los campos con soporte offline la
  cual tenía que realizar una sincronización de datos cuando recuperaba la conexión a internet.
  Además, envía reportes vía email. Desarrollado con NodeJS con arquitectura de microservicios y desplegado
  en AWS.`,
  HARVEST_TITLE: 'Aplicación Agrícola para Cosecha',
  HEALTHCARE_DATE: '2020, Chile',
  HEALTHCARE_DESCRIPTION: `Aplicación móvil que mediante Bluetooth podía estimar un aproximado de distancia
  entre las personas, triaje y seguimiento de test PCR. Fue implementado en empresas privadas y
  con consentimiento de sus trabajadores. Desarrollado en Golang para el procesamiento de datos.`,
  HEALTHCARE_TITLE: 'Aplicación de Cuidado y Seguimiento de casos COVID-19',
  HEALTH_CENTER_DATE: '2019, Chile',
  HEALTH_CENTER_DESCRIPTION: `Aplicación Web para ver información de tu plan de salud y buscar atención cercana
  basado en la ubicación entregada por el navegador.`,
  HEALTH_CENTER_TITLE: 'Aplicación de Consultas Médicas con Georreferenciación',
  SURVEY_DATE: '2019, Chile',
  SURVEY_DESCRIPTION: `Software as a Service para crear y contestar encuestas integrado con blockchain para
  firmar las respuestas. Desarrollado con microservicios en NodeJS.`,
  SURVEY_TITLE: 'Motor de Encuestas',
  TITLE: 'proyectos:',
  VOD_DATE: '2022 - Actualmente, Latino América',
  VOD_DESCRIPTION: `Aplicación multiplataforma de streaming con contenido hispano tal como peliculas, series y
  documentales. Disponeble en Android, Android TV, iOS, Roku, Tizen, Web and WebOS. El backend se desarrolló
  usando Event-Driven Microservices con NodeJS y RabbitMQ, el Frontend usando React para Web y React Native
  para las aplicaciones Smart TV.`,
  VOD_TITLE: 'Aplicación de Video on Demand'
};

export const RESUME_COMMAND = {
  FOOTER: `Para más información puedes usar los comandos <span class="command text-shadow">'skills'</span>,
  <span class="command text-shadow">'projects'</span> y <span class="command text-shadow">'social'</span>.`,
  PARAPH_1: `Soy Ingeniero de Software con experiencia liderando equipos, desarrollando e implementando
  sistemas de información usando tecnologías modernas y altos estándares de calidad.`,
  PARAPH_2: `Trabajo en una compañía de software factory en Valparaíso, en donde desarrollo
  sistemas en la nube usando infraestructura con Amazon Web Services, optimizando costos, optimizando
  la escalabilidad y mantenibilidad de las aplicaciones.`,
  PARAPH_3: `Ahí realicé la automatización de procesos de desarrollo, despliegue y pruebas usando
  herramientas de integración continua.`,
  PARAPH_4: `Actualmente trabajo como technical lead donde uso Scrum en equipos de hasta 8 personas.
  También, Diseño e implemento soluciones de arquitectura para software aplicado en diversas áreas.`,
  TITLE: 'resumen:'
};

export const SKILLS_COMMAND = {
  TITLE_1: 'Lenguajes de programación:',
  TITLE_2: 'Tecnologías:'
};

export const SOCIAL_COMMAND = {
  TITLE: 'redes sociales:'
};

export const WELCOME_COMMAND = {
  CONTENT: `Soy Juan Ignacio Fuentes, Technical Lead & Senior Developer.<br />
  Para empezar puedes escribir el comando <span class="command text-shadow">'resume'</span>.`,
  FOOTER: `Escribe <span class="command text-shadow">'lang'</span> para cambiar el idioma.<br />
  También puedes escribir <span class="command text-shadow">'help'</span> para ver una lista de los comandos disponibles.`,
  HEADER: '¡Bienvenido a mi portafolio!'
};
