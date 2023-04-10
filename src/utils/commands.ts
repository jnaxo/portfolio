import texts from '../utils/lang';
import { availableLang } from './lang';

type RunCommandFunc = (lang: string) => (command: string, callback?: Function) => void;
type Commands = {[key: string]: { func: string, description: string }};

const commands = (lang = ''): Commands => {
  const {
    HELP_COMMAND
  } = texts(lang);

  return {
    clear: {
      func: 'runClear',
      description: HELP_COMMAND.CLEAR_DESCRIPTION
    },
    help: {
      func: 'runHelp',
      description: HELP_COMMAND.HELP_DESCRIPTION
    },
    history: {
      func: 'runHistory',
      description: HELP_COMMAND.HISTORY_DESCRIPTION
    },
    lang: {
      func: 'runLang',
      description: HELP_COMMAND.LANG_DESCRIPTION
    },
    projects: {
      func: 'runProjects',
      description: HELP_COMMAND.PROJECTS_DESCRIPTION
    },
    resume: {
      func: 'runResume',
      description: HELP_COMMAND.RESUME_DESCRIPTION
    },
    skills: {
      func: 'runSkills',
      description: HELP_COMMAND.SKILLS_DESCRIPTION
    },
    social: {
      func: 'runSocial',
      description: HELP_COMMAND.SOCIAL_DESCRIPTION
    },
    welcome: {
      func: 'runWelcome',
      description: HELP_COMMAND.WELCOME_DESCRIPTION
    }
  };
};

const implementations = (lang = '') => {
  const {
    HELP_COMMAND,
    LANG_COMMAND,
    PROJECTS_COMMAND,
    RESUME_COMMAND,
    SKILLS_COMMAND,
    SOCIAL_COMMAND,
    WELCOME_COMMAND
  } = texts(lang);
  const cmd = commands(lang);

  return {
    runClear: (_: string, callback: Function) => {
      setTimeout(() => {
        callback('');
      }, 50);
      return '';
    },
    runHelp: () => `
      ${HELP_COMMAND.DESCRIPTION}<br />
      <p class="mt-2 font-semibold uppercase">${HELP_COMMAND.TITLE}</p>
      <ul class="ml-5">
        ${Object.keys(cmd).map(c => {
          const commandData = cmd[c as keyof typeof cmd];
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
    runLang: (args: string, callback: Function) => {
      if (args) {
        if (!Object.keys(availableLang).some(l => l === args)) {
          return LANG_COMMAND.NOT_IMPLEMENTED;
        }
        callback(args);
        return texts(lang).LANG_COMMAND.CHANGED;
      }
      return `
        ${LANG_COMMAND.DESCRIPTION}<br />
        <p class="mt-2 font-semibold uppercase">${LANG_COMMAND.TITLE}</p>
        <ul class="ml-5">
          ${Object.keys(availableLang).map(l => {
            const langDescription = availableLang[l as keyof typeof availableLang];
            return `
              <li>
                <div class="grid grid-cols-6 xl:grid-cols-10 gap-5">
                  <div class="font-medium">${l}</div>
                  <p class="col-span-5 xl:col-span-5 description">${langDescription}</p>
                </div>
              </li>
            `;
          }).join('')}
        </ul>
        <p class="mb-2 description">${LANG_COMMAND.FOOTER}</p>
      `
    },
    runProjects: () => `
      <div class="my-3">
        <p class="mt-2 font-semibold uppercase">${PROJECTS_COMMAND.TITLE}</p>
        <p class="mt-1 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
          <span class="skill">${PROJECTS_COMMAND.VOD_TITLE}</span> <span class="description">${PROJECTS_COMMAND.VOD_DATE}</span><br />
          ${PROJECTS_COMMAND.VOD_DESCRIPTION}
        </p>
        <p class="my-5 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
          <span class="skill">${PROJECTS_COMMAND.HARVEST_TITLE}</span> <span class="description">${PROJECTS_COMMAND.HARVEST_DATE}</span><br />
          ${PROJECTS_COMMAND.HARVEST_DESCRIPTION}
        </p>
        <p class="my-5 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
          <span class="skill">${PROJECTS_COMMAND.HEALTHCARE_TITLE}</span> <span class="description">${PROJECTS_COMMAND.HEALTHCARE_DATE}</span><br />
          ${PROJECTS_COMMAND.HEALTHCARE_DESCRIPTION}
        </p>
        <p class="my-5 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
          <span class="skill">${PROJECTS_COMMAND.SURVEY_TITLE}</span> <span class="description">${PROJECTS_COMMAND.SURVEY_DATE}</span><br />
          ${PROJECTS_COMMAND.SURVEY_DESCRIPTION}
        </p>
        <p class="my-5 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
          <span class="skill">${PROJECTS_COMMAND.HEALTH_CENTER_TITLE}</span> <span class="description">${PROJECTS_COMMAND.HEALTH_CENTER_DATE}</span><br />
          ${PROJECTS_COMMAND.HEALTH_CENTER_DESCRIPTION}
        </p>
      </div>
    `,
    runResume: () => `
      <div class="my-3">
        <p class="mt-2 font-semibold uppercase">${RESUME_COMMAND.TITLE}</p>
        <p class="mt-1 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
          ${RESUME_COMMAND.PARAPH_1}
        </p>
        <p class="my-5 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
          ${RESUME_COMMAND.PARAPH_2}
        </p>
        <p class="my-5 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
          ${RESUME_COMMAND.PARAPH_3}
        </p>
        <p class="my-5 mx-3 text-justify w-11/12 sm:w-9/12 xl:w-1/2">
        ${RESUME_COMMAND.PARAPH_4}
        </p>
        <p class="my-5 description">
          ${RESUME_COMMAND.FOOTER}
        </p>
      </div>
    `,
    runSkills: () => `
      <div class="my-3">
        <p class="mt-2 font-semibold uppercase">${SKILLS_COMMAND.TITLE_1}</p>
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
        <p class="mt-2 font-semibold uppercase">${SKILLS_COMMAND.TITLE_2}</p>
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
          <span class="skill">SmartTV</span>
          <span class="skill">Terraform</span>
          <span class="skill">VueJS</span>
        </p>
      </div>
    `,
    runSocial: () => `
      <div class="my-3">
        <p class="mt-2 font-semibold uppercase">${SOCIAL_COMMAND.TITLE}</p>
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
    <p class="my-2 font-semibold text-xl">${WELCOME_COMMAND.HEADER}</p>
    <p class="mb-2">${WELCOME_COMMAND.CONTENT}</p>
    <p class="mb-2 description">${WELCOME_COMMAND.FOOTER}</p>
    `
  };
};

export const runCommand: RunCommandFunc = lang => (statement, callback) => {
  const statements = statement.split(' ');
  const command = statements.shift();
  const args = statements.length && statements.join(' ') || '';
  const cmd = commands(lang);
  const imp = implementations(lang);
  if (command === '') {
    return '';
  }
  if (!Object.keys(cmd).some(k => k === command)) {
    return `${texts(lang).ERROR_COMMAND.NOT_FOUND} ${command}`;
  }
  const selectedCommand = cmd[command as keyof typeof cmd];
  return imp[selectedCommand.func as keyof typeof imp](args, callback || (() => { }));
};
