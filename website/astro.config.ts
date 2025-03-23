import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import { getStarlightConfig } from './utils/typedoc';
import { typedocPackageConfig } from './config/typedoc';
import tailwind from '@astrojs/tailwind';

const { plugins, sidebar } = getStarlightConfig(typedocPackageConfig);

console.log('plugins', plugins);
console.log('sidebar', sidebar);


export default defineConfig({
  integrations: [
    starlight({
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/HiDeoo/starlight-typedoc/edit/main/example/',
      },
      plugins,
      sidebar,
      social: {
        github: 'https://github.com/HiDeoo/starlight-typedoc',
      },
      title: 'Starlight TypeDoc Example',
      components: {
        // 重写默认的 `SocialIcons` 组件。
        Header: './src/components/Header.astro',
      },
    }),
    tailwind({
      applyBaseStyles: false
    }),
  ],
})
