import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


export const presets: Config['presets'] = [
  [
    '@docusaurus/preset-classic',
    {
      docs: {
        sidebarPath: './sidebars.ts',
        // editUrl:
        //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex]
      },
      blog: false,
      theme: {
        customCss: './src/css/custom.css',
      },
    } satisfies Preset.Options,
  ],
]
