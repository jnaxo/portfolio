type RunCommandFunc = (command: string, callback?: Function) => void;

const appDescription = () => 'Portfolio Interactive Terminal version v1.0.0 <br />Develop with React 18 & tailwindcss';

export const commands = {
  clear: {
    func: 'runClear',
    description: 'Clear the terminal screen.'
  },
  help: {
    func: 'runHelp',
    description: 'Show a list of available commands.'
  },
  history: {
    func: 'runHistory',
    description: 'View command history.'
  },
  projects: {
    func: 'runProjects',
    description: 'Describe my participation on relevant projects.'
  },
  resume: {
    func: 'runResume',
    description: 'A resume about me.'
  },
  skills: {
    func: 'runSkills',
    description: 'Show a list of my main skills.',
  },
  social: {
    func: 'runSocial',
    description: 'Links of my social networks.'
  },
  welcome: {
    func: 'runWelcome',
    description: 'Display the welcome message.'
  }
};

const implementations = {
  runClear: (_: string, callback: Function) => {
    setTimeout(() => {
      callback('');
    }, 50);
    return '';
  },
  runHelp: () => `
    ${appDescription()}<br />
    <p class="mt-2 font-semibold uppercase">commands:</p>
    <ul class="ml-5">
      ${Object.keys(commands).map(c => {
        const commandData = commands[c as keyof typeof commands];
        return `
          <li>
            <div class="grid grid-cols-6 xl:grid-cols-10 gap-5">
              <div class="font-medium">${c}</div>
              <p class="col-span-5 xl:col-span-5 description">${commandData.description}</p>
            </div>
          </li>
        `;
  }).join('')}
    </ul>
  `,
  runHistory: (args: string) => `
    <ul class="ml-5">
      ${args.split('<>').filter(h => h).map((h, idx) => `
        <li><div class="font-medium"><span class="description">${idx + 1}</span> ${h}</div></li>
      `).join('')}
    </ul>
  `,
  runProjects: () => `
    <div class="my-3">
      <p class="mt-2 font-semibold uppercase">projects:</p>
      <p class="mt-1 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
        <span class="skill">Video On Demand App</span> <span class="description">2022 - Ongoing, Latin America</span><br />
        Streaming cross-platform application for hispanic content like movies,
        series or documentaries. Available for Android, Android TV, iOS, Roku, Tizen, Web and WebOS.
        For backend i used Event Drive Micro-Services with NodeJS and RabbitMQ, and for Frontend i used
        React for Web and React Native for Smart TV apps.
      </p>
      <p class="my-5 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
        <span class="skill">Harvest App</span> <span class="description">2021, Chile</span><br />
        Agricultural mobile application used for harvest assistance. Support offline work with automatic and
        manual synchronization. Also, send reports to admins by email. Develop in NodeJS with micro-services
        architecture and deployed on AWS.
      </p>
      <p class="my-5 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
        <span class="skill">Healthcare App for COVID-19</span> <span class="description">2020, Chile</span><br />
        Mobile application with bluetooth protocol to keep distance and track proximity in private companies
        on pandemic context. Develop with Golang to fast data processing.
      </p>
      <p class="my-5 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
        <span class="skill">Survey Engine</span> <span class="description">2019, Chile</span><br />
        Web services to make and answers surveys integrated with blockchain technologies to sign data.
      </p>
      <p class="my-5 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
        <span class="skill">Health Centers App</span> <span class="description">2019, Chile</span><br />
        Web application for Chilean health plans and health centers information using
        browser location to display better places to receive medical attention.
      </p>
    </div>
  `,
  runResume: () => `
    <div class="my-3">
      <p class="mt-2 font-semibold uppercase">resume:</p>
      <p class="mt-1 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
        I am a software engineer with experience leading
        development teams, developing and implementing
        information systems with moderns technologies and
        high-quality standards.
      </p>
      <p class="my-5 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
        I work in a software factory company in Valparaíso, in which i developed
        cloud systems using Amazon Web Services infrastructure,
        optimizing costs, improves scalability and maintainability
        of the applications.
      </p>
      <p class="my-5 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
        There, I made an automatization process for developments, deployments
        and tests using continuous integration tools.
      </p>
      <p class="my-5 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
        I have the job of technical lead where i use Scrum in teams up
        to 8 people. Also, i design architecture solutions for the
        software systems.
      </p>
      <p class="my-5 description">
        For more information you can type <span class="command text-shadow">'skills'</span>,
        <span class="command text-shadow">'projects'</span> or
        <span class="command text-shadow">'social'</span>.
      </p>
    </div>
  `,
  runSkills: () => `
    <div class="my-3">
      <p class="mt-2 font-semibold uppercase">Programming languages:</p>
      <p class="mt-1 mx-3 w-11/12 sm:w-9/12 xl:w-1/2">
        <span class="skill">C</span>
        <span class="skill">C++</span>
        <span class="skill">GO</span>
        <span class="skill">Java</span>
        <span class="skill">Javascript</span>
        <span class="skill">Kotlin</span>
        <span class="skill">PHP</span>
        <span class="skill">Python</span>
        <span class="skill">SQL</span>
        <span class="skill">Typescript</span>
      </p>
      <p class="mt-2 font-semibold uppercase">Technologies:</p>
      <p class="mt-1 mx-3 w-11/12 sm:w-9/12 xl:w-1/2">
        <span class="skill">AWS</span>
        <span class="skill">Bash</span>
        <span class="skill">CI/CD</span>
        <span class="skill">Docker</span>
        <span class="skill">Firebase</span>
        <span class="skill">GitFlow</span>
        <span class="skill">Jira</span>
        <span class="skill">Laravel</span>
        <span class="skill">Micro-Services</span>
        <span class="skill">MongoDB</span>
        <span class="skill">PostGIS</span>
        <span class="skill">Postgres</span>
        <span class="skill">Unit Tests</span>
        <span class="skill">RabbitMQ</span>
        <span class="skill">React</span>
        <span class="skill">React Native</span>
        <span class="skill">Scrum</span>
        <span class="skill">Smart TV</span>
        <span class="skill">Terraform</span>
        <span class="skill">VueJS</span>
      </p>
    </div>
  `,
  runSocial: () => `
    <div class="my-3">
      <p class="mt-2 font-semibold uppercase">social networks:</p>
      <ul class="ml-5">
        <li>
          <div class="grid grid-cols-6 xl:grid-cols-10 gap-5">
            <div class="font-medium">GitHub</div>
            <a
              class="col-span-5 xl:col-span-5 description hover:text-white hover:text-shadow"
              href="https://github.com/jnaxo"
              target="_blank"
            >
              https://github.com/jnaxo
            </a>
          </div>
        </li>
        <li>
          <div class="grid grid-cols-6 xl:grid-cols-10 gap-5">
            <div class="font-medium">Linkedin</div>
            <a
              class="col-span-5 xl:col-span-5 description hover:text-white hover:text-shadow"
              href="https://www.linkedin.com/in/j-ignacio-fuentes-348382117"
              target="_blank"
            >
              https://www.linkedin.com/in/j-ignacio-fuentes-348382117
            </a>
          </div>
        </li>
      </ul>
    </div>
  `,
  runWelcome: () => `
  <p class="my-2 font-semibold text-xl">Welcome to my portfolio!</p>
  <p class="mb-2">
    I am Juan Ignacio Fuentes, Technical Lead & Senior Developer.<br />
    Just for starters you can use <span class="command text-shadow">'resume'</span> command.
  </p>
  <p class="mb-2 description">
    Also, you can type <span class="command text-shadow">'help'</span> to see list of available commands.
  </p>
  `
};

export const runCommand: RunCommandFunc = (statement, callback) => {
  const statements = statement.split(' ');
  const command = statements.shift();
  const args = statements.length && statements.join(' ') || '';
  if (command === '') {
    return '';
  }
  if (!Object.keys(commands).some(k => k === command)) {
    return `command not found: ${command}`;
  }
  const selectedCommand = commands[command as keyof typeof commands];
  return implementations[selectedCommand.func as keyof typeof implementations](args, callback || (() => { }));
};
