export const ERROR_COMMAND = {
  NOT_FOUND: 'command not found:',
};

export const HELP_COMMAND = {
  DESCRIPTION: `Portfolio Interactive Terminal version v1.0.0 <br />Develop with React 18 & tailwindcss`,
  CLEAR_DESCRIPTION: 'Clear the terminal screen.',
  HELP_DESCRIPTION: 'Show a list of available commands.',
  HISTORY_DESCRIPTION: 'View command history.',
  LANG_DESCRIPTION: 'List or change the terminal language.',
  PROJECTS_DESCRIPTION: 'Describe my participation on relevant projects.',
  RESUME_DESCRIPTION: 'Resume about me.',
  SKILLS_DESCRIPTION: 'Show a list of my main skills.',
  SOCIAL_DESCRIPTION: 'Links of my social networks.',
  TITLE: 'commands:',
  WELCOME_DESCRIPTION: 'Display the welcome message.'
};

export const LANG_COMMAND = {
  CHANGED: 'Language changed to English',
  DESCRIPTION: `Select a language of the following list`,
  NOT_IMPLEMENTED: 'The language selected is not implemented.',
  TITLE: 'languages:',
  FOOTER: `Type '<span class="command text-shadow">lang</span> [selection]'.`
};

export const PROJECTS_COMMAND = {
  HARVEST_DATE: '2021, Chile',
  HARVEST_DESCRIPTION: `Agricultural mobile application used for harvest assistance. Support offline work with automatic and
  manual synchronization. Also, send reports to admins by email. Develop in NodeJS with micro-services
  architecture and deployed on AWS.`,
  HARVEST_TITLE: 'Harvest App',
  HEALTHCARE_DATE: '2020, Chile',
  HEALTHCARE_DESCRIPTION: `Mobile application with bluetooth protocol to keep distance and track proximity in private companies
  on pandemic context. Develop with Golang for data processing.`,
  HEALTHCARE_TITLE: 'Healthcare App for COVID-19',
  HEALTH_CENTER_DATE: '2019, Chile',
  HEALTH_CENTER_DESCRIPTION: `Web application for Chilean health plans and health centers information using
  browser location to display better places to receive medical attention.`,
  HEALTH_CENTER_TITLE: 'Health Centers App',
  SURVEY_DATE: '2019, Chile',
  SURVEY_DESCRIPTION: `Web services to make and answer surveys integrated with blockchain technologies for data sign.
  Made with micro-services in NodeJS.`,
  SURVEY_TITLE: 'Survey Engine',
  TITLE: 'projects:',
  VOD_DATE: '2022 - Ongoing, Latin America',
  VOD_DESCRIPTION: `Streaming cross-platform application for hispanic content like movies,
  series or documentaries. Available for Android, Android TV, iOS, Roku, Tizen, Web and WebOS.
  I develop backend using Event-Driven Microservices with NodeJS and RabbitMQ, and Frontend using
  React for Web and React Native for Smart TV apps.`,
  VOD_TITLE: 'Video On Demand App'
};

export const RESUME_COMMAND = {
  FOOTER: `For more information you can type <span class="command text-shadow">'skills'</span>,
  <span class="command text-shadow">'projects'</span> and <span class="command text-shadow">'social'</span>.`,
  PARAPH_1: `I am a Software Engineer with experience leading development teams, developing and implementing
  information systems with moderns technologies and high-quality standards.`,
  PARAPH_2: `I work in a software factory company in Valparaíso, in which I developed cloud systems
  using Amazon Web Services infrastructure, optimizing costs, improves scalability and maintainability
  of the applications.`,
  PARAPH_3: `There, I made automatization processes for developments, deployments and testing
  using continuous integration tools.`,
  PARAPH_4: `Actually I have a job as technical lead where I use Scrum in teams up
  to 8 people. Also, I design and implement architecture solutions for the
  software systems.`,
  TITLE: 'resume:'
};

export const SKILLS_COMMAND = {
  TITLE_1: 'Programming languages:',
  TITLE_2: 'Technologies:'
};

export const SOCIAL_COMMAND = {
  TITLE: 'social networks:'
};

export const WELCOME_COMMAND = {
  CONTENT: `I am Juan Ignacio Fuentes, Technical Lead & Senior Developer.<br />
  Just for starters you can use <span class="command text-shadow">'resume'</span> command.`,
  FOOTER: `Type <span class="command text-shadow">'lang'</span> to change language.<br />
  Also you can type <span class="command text-shadow">'help'</span> to see list of available commands.`,
  HEADER: 'Welcome to my portfolio!'
};
