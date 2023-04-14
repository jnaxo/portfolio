import * as EN from './en';
import * as ES from './es';

export const availableLang = {
  en: 'English',
  es: 'Español'
};

export default (lang: string) => {
  if (lang.toLocaleLowerCase() === 'en') {
    return EN;
  }
  if (lang.toLocaleLowerCase() === 'es') {
    return ES;
  }
  return EN;
};
