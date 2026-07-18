import { tr } from '../../i18n';

export function sidebarDevelop(locale :string) {
  const t = (key :string) => {
    return tr(locale, key);
  }
  return [
    { text: t('overview'), link: 'overview' },
    { text: t('contributing'), link: 'contributing' },
  ]
}

export function sidebarGuide(locale :string) {
  const t = (key :string) => {
    return tr(locale, key);
  }
  return [
    {
      text: t('gettingStarted'),
      collapsed: false,
      items: [
        { text: t('introduction'), link: 'introduction' },
        { text: t('gettingStarted'), link: 'getting-started' },
        {
          text: t('installation'),
          collapsed: true,
          items: [
            {
              text: t('desktop'),
              items: [
                { text: 'macOS', link: 'installation/desktop-macos' },
                { text: 'Windows', link: 'installation/desktop-windows' },
                { text: 'Linux', link: 'installation/desktop-linux' },
              ]
            },
            { text: 'Docker', link: 'installation/docker' },
          ]
        },
      ],
    },
    {
      text: t('ai'),
      collapsed: true,
      link: 'ai/',
      items: [
        { text: t('ai.providers'), link: 'ai/providers' },
        { text: t('ai.chat'), link: 'ai/chat' },
      ]
    },
    {
      text: t('note'),
      link: 'note/',
      collapsed: true,
      items: [
        { text: t('introduction'), link: 'introduction' },
      ]
    },
    {
      text: t('reading'),
      collapsed: true,
      link: 'reading/',
      items: [
        {
          text: t('settings'),
          items: [
            { text: t('fonts'), link: 'reading/fonts/' },
            {
              text: t('styles'),
              link: 'reading/styles/',
              items: [
                { text: t('styles.global'), link: 'reading/styles/global' },
                { text: t('styles.book'), link: 'reading/styles/book' },
              ]
            },
            {
              text: t('background'),
              collapsed: true,
              link: 'reading/background/',
              items: [
                { text: t('image'), link: 'reading/background/image' },
                { text: t('texture'), link: 'reading/background/texture' },
                { text: t('color'), link: 'reading/background/color' },
              ]
            },
          ]
        },
      ]
    },
    {
      text: t('system'),
      collapsed: true,
      items: [
        { text: t('introduction'), link: 'introduction' },
      ]
    },
    { text: t('shortcut'), link: 'shortcut' },
  ]
}
