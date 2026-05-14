import { tr } from '../../i18n';

export function sidebarGuide(locale :string) {
  const t = (key :string) => {
    return tr(locale, `sidebar.${key}`);
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
    // {
    //   text: t('config'),
    //   collapsed: false,
    //   items: [
    //     { text: t('overview'), link: 'config/overview' },
    //     { text: 'AI', link: 'config/ai' },
    //   ]
    // },
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