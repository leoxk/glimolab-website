/**
 * GlimoLab i18n utilities
 *
 * Provides helpers to detect the current locale from the URL and to retrieve
 * translated UI strings via a `t()` function inside Astro components.
 */
import { ui, defaultLang, languages, type Lang, type UIKey } from './ui';

/**
 * Extract the locale segment from an Astro URL pathname.
 * e.g. `/fil/services` → 'fil', `/services` → 'en' (default, unprefixed)
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
    return lang as Lang;
  }
  return defaultLang;
}

/**
 * Build a localized path for an internal route.
 * The default locale (en) is not prefixed.
 */
export function localizePath(path: string, lang: Lang = defaultLang): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) {
    return cleanPath;
  }
  return `/${lang}${cleanPath}`;
}

/**
 * Create a translation function for the given locale.
 *
 * Usage in an Astro component:
 * ```astro
 * ---
 * import { useTranslations } from '@i18n/utils';
 * const t = useTranslations(Astro.url);
 * ---
 * <h1>{t('hero.title')}</h1>
 * ```
 */
export function useTranslations(lang: Lang): (key: UIKey) => string;
export function useTranslations(url: URL): (key: UIKey) => string;
export function useTranslations(langOrUrl: Lang | URL): (key: UIKey) => string {
  const lang: Lang =
    typeof langOrUrl === 'string' ? langOrUrl : getLangFromUrl(langOrUrl);
  const dict = ui[lang] ?? ui[defaultLang];

  return function t(key: UIKey): string {
    return dict[key] ?? ui[defaultLang][key] ?? key;
  };
}

/**
 * Return the full language metadata map (for language switchers).
 */
export function getLanguages() {
  return languages;
}

export { defaultLang, type Lang, type UIKey };
