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
  runProjects: () => {
    // WIP
    return 'Work in progress...';
  },
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
        For more information you can run <span class="command text-shadow">'skills'</span>
        or <span class="command text-shadow">'projects'</span> commands.
      </p>
    </div>
  `,
  runSkills: () => `
    <div class="my-3">
      <p class="mt-2 font-semibold uppercase">skills:</p>
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
  runSocial: () => {
    // WIP
    return 'Work in progress...';
  },
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
