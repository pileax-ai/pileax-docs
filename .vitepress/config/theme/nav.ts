import { tr } from '../../i18n'
import { DefaultTheme } from "vitepress";

export function nav(locale :string) {
  const t = (key :string) => {
    return tr(locale, key)
  }
  const base = (locale === 'en') ? '' : `/${locale}`;
  return [
    { text: t('guide'), link: base + '/guide/getting-started' },
    { text: t('download'), link: base + '/download' },
  ] as DefaultTheme.NavItem[];
}