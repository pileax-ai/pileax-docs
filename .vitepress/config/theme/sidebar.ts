import { tr } from '../../i18n';

export function sidebarGuide(locale :string) {
  const t = (key :string, global = false) => {
    return tr(locale, `${global ? '' : 'sidebar.'}${key}`);
  }
  return [
    {
      text: t('gettingStarted'),
      collapsed: false,
      items: [
        { text: t('introduction'), link: 'introduction' },
        { text: t('gettingStarted'), link: 'getting-started' },
      ],
    },
    {
      text: t('installation'),
      collapsed: false,
      items: [
        {
          text: t('desktop'),
          collapsed: false,
          items: [
            { text: 'macOS', link: 'installation/desktop-macos' },
            { text: 'Windows', link: 'installation/desktop-windows' },
            { text: 'Linux', link: 'installation/desktop-linux' },
          ]
        },
        { text: 'Docker', link: 'installation/docker' },
      ]
    },
    {
      text: t('reading', true),
      collapsed: true,
      items: [
        {
          text: t('settings', true),
          collapsed: false,
          items: [
            // { text: t('fonts', true), link: 'reading/fonts/' },
            {
              text: t('styles', true),
              link: 'reading/styles/',
              items: [
                { text: t('styles.global'), link: 'reading/styles/global' },
                { text: t('styles.book'), link: 'reading/styles/book' },
              ]
            },
            {
              text: t('background', true),
              collapsed: true,
              link: 'reading/background/',
              items: [
                { text: t('image', true), link: 'reading/background/image' },
                { text: t('texture', true), link: 'reading/background/texture' },
                { text: t('color', true), link: 'reading/background/color' },
              ]
            },
          ]
        },
      ]
    },
    // {
    //   text: t('guide'),
    //   collapsed: false,
    //   items: [
    //     { text: t('introduction'), link: 'introduction' },
    //     { text: t('gettingStarted'), link: 'getting-started' },
    //   ]
    // },
    { text: t('contributing'), link: 'contributing' },
    // { text: t('community'), link: 'community' },
  ]
}