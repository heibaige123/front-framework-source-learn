// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './astro.sidebar'

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'huoguang',
            defaultLocale: 'zh-CN',
            head: [],
            social: {
                github: 'https://github.com/withastro/starlight',
            },
            
            sidebar,
        }),
    ],
});
