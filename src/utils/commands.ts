type RunCommandFunc = (command: string, callback?: Function) => void;

const appDescription = () => 'Portfolio Interactive Terminal version v1.0.0 <br />Develop with React 18 & tailwindcss';

export const commands = {
  about: {
    func: 'runAbout',
    description: 'A resume about me.'
  },
  clear: {
    func: 'runClear',
    description: 'Clear the terminal screen.'
  },
  help: {
    func: 'runHelp',
    description: 'Show a list of available commands.'
  },
  projects: {
    func: 'runProjects',
    description: 'Describe my participation on relevant projects.'
  },
  skills: {
    func: 'funSkills',
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
  runAbout: () => {
    // WIP
    return 'Work in progress...';
  },
  runClear: (callback: Function) => {
    setTimeout(() => {
      callback('');
    }, 50);
    return '';
  },
  runHelp: () => `
    ${appDescription()}<br />
    <p class="mt-2 font-semibold">COMMANDS:</p>
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
  runProjects: () => {
    // WIP
    return 'Work in progress...';
  },
  funSkills: () => {
    // WIP
    return 'Work in progress...';
  },
  runSocial: () => {
    // WIP
    return 'Work in progress...';
  },
  runWelcome: () => `
  <p>
    Welcome to my portfolio web page. <br />
    Type <span class="command text-shadow">'help'</span> to see list of available commands.
  </p>
  `
};

export const runCommand: RunCommandFunc = (command, callback) => {
  if (!Object.keys(commands).some(k => k === command)) {
    return 'error: command not found!';
  }
  const selectedCommand = commands[command as keyof typeof commands];
  return implementations[selectedCommand.func as keyof typeof implementations](callback || (() => {}));
};
