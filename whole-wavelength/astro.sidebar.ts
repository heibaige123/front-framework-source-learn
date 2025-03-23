import type { StarlightUserConfig } from "@astrojs/starlight/types";

export const sidebar = [
  {
    label: 'Guides',
    items: [
      { label: 'Example Guide', slug: 'guides/example' },
    ],
  },
  {
    label: 'Reference',
    autogenerate: { directory: 'reference' },
  }
] satisfies StarlightUserConfig['sidebar'];