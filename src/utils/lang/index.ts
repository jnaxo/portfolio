import * as EN from './en';

export const availableLang = {
  en: 'English'
};

export default (lang: string) => {
  if (lang.toLocaleLowerCase() === 'en') {
    return EN;
  }
  return EN;
};
