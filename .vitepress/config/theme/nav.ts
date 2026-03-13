import { tr } from '../../i18n'
import { DefaultTheme } from "vitepress";

export function nav(locale :string) {
  const t = (key :string) => {
    return tr(locale, `nav.${key}`)
  }
  const base = (locale === 'en') ? '' : `/${locale}`;
  return [
    { text: t('guide'), link: base + '/guide/getting-started' },
  ] as DefaultTheme.NavItem[];
}