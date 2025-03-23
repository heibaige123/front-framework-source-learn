import type { StarlightUserConfig } from "@astrojs/starlight/types";

export const sidebar = [
  {
    label: 'gridstack',
    autogenerate: {
      directory: 'library-api/gridstack'
    },
  },
  {
    label: 'ms',
    autogenerate: {
      directory: 'library-api/ms'
    },
  },
] satisfies StarlightUserConfig['sidebar'];
