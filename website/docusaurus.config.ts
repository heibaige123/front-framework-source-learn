import type { Config } from '@docusaurus/types';
import { presets, themeConfig } from './config';

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      zh: {
        htmlLang: 'zh-Hans',
        direction: 'ltr',
      }
    }
  },

  presets,
  themeConfig,
  plugins: [
    [
      'docusaurus-lunr-search',
      {
        languages: ['en', 'zh'],
      }
    ]
  ]
};

export default config;
