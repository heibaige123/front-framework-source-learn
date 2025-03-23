import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightTypeDoc, { typeDocSidebarGroup } from './plugins/starlight-typedoc'
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    starlight({
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/HiDeoo/starlight-typedoc/edit/main/example/',
      },
      plugins: [
        starlightTypeDoc({
          entryPoints: ['../library-sources/gridstack/src/gridstack.ts'],
          tsconfig: '../library-sources/gridstack/tsconfig.json',
          sidebar: {
            label: 'API (auto-generated)',
          },
          typeDoc: {
            plugin: [
              'typedoc-plugin-mdn-links',
              'typedoc-plugin-frontmatter',
              './plugins/frontmatter.js'
            ],
            logLevel: "Info",
            exclude: ["node_modules/**", "**/dist/**", "**/test/**"],
            includeVersion: true,
            excludeExternals: true,
            excludePrivate: true,
            excludeProtected: true,
            excludeInternal: true,
            hideGenerator: true,
            disableSources: true,
            name: "gridstack",
            theme: "default",
          },
          errorOnEmptyDocumentation: false,
        }),
      ],
      sidebar: [
        {
          label: 'Guides',
          items: ['guides/example'],
        },
        typeDocSidebarGroup,
      ],
      social: {
        blueSky: 'https://bsky.app/profile/hideoo.dev',
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
