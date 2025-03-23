import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { sidebar } from './astro.sidebar';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs with Tailwind',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar,
			customCss: ['./src/tailwind.css'],
			components: {
        // 重写默认的 `SocialIcons` 组件。
        Header: './src/components/Header.astro',
      },
		}),
		tailwind({
			applyBaseStyles: false
		}),
	],
});
