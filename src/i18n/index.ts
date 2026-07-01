import en from './en.json';
import fr from './fr.json';

export type Lang = 'en' | 'fr';

const translations = { en, fr } as const;

export function loadTranslations(lang: Lang) {
  return translations[lang] ?? translations.en;
}

export function altLang(lang: Lang): Lang {
  return lang === 'en' ? 'fr' : 'en';
}

export function localizePath(lang: Lang, path: string) {
  if (lang === 'en') return `/en${path}`;
  return `/fr${path}`;
}
