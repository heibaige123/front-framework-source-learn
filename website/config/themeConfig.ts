import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { LIBRARY_API_SIDEBAR } from './constant'

export const themeConfig: Config['themeConfig'] = {
  image: 'img/docusaurus-social-card.jpg',
  navbar: {
    title: 'My Site',
    logo: {
      alt: 'My Site Logo',
      src: 'img/logo.svg',
    },
    items: [
      {
        type: 'docSidebar',
        sidebarId: 'tutorialSidebar',
        position: 'left',
        label: 'Tutorial',
      },
      // {
      //   to: '/blog',
      //   label: 'Blog',
      //   position: 'left'
      // },
      {
        type: 'dropdown',
        label: '开源库学习',
        position: 'left',
        items: LIBRARY_API_SIDEBAR.map(item => {
          return {
            label: item.label,
            href: item.href,
            sidebarid: item.sidebarId
          }
        })
      },
      {
        href: 'https://github.com/facebook/docusaurus',
        label: 'GitHub',
        position: 'right',
      }
    ],
  },
  // footer: {
  //   style: 'dark',
  //   links: [
  //     {
  //       title: 'Docs',
  //       items: [
  //         {
  //           label: 'Tutorial',
  //           to: '/docs/intro',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Community',
  //       items: [
  //         {
  //           label: 'Stack Overflow',
  //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
  //         },
  //         {
  //           label: 'Discord',
  //           href: 'https://discordapp.com/invite/docusaurus',
  //         },
  //         {
  //           label: 'X',
  //           href: 'https://x.com/docusaurus',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'More',
  //       items: [
  //         {
  //           label: 'Blog',
  //           to: '/blog',
  //         },
  //         {
  //           label: 'GitHub',
  //           href: 'https://github.com/facebook/docusaurus',
  //         },
  //       ],
  //     },
  //   ],
  //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
  // },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
} satisfies Preset.ThemeConfig

