import { StarlightTypeDocOptions } from 'starlight-typedoc'

export const typedocPackageConfig: StarlightTypeDocOptions[] = [
  {
    entryPoints: ['../library-sources/gridstack/src/gridstack.ts'],
    output: 'library-api/gridstack',
    pagination: true,
    sidebar: {
      collapsed: true,
    },
    tsconfig: '../library-sources/gridstack/tsconfig.json',
    typeDoc: {
      readme: '../library-sources/gridstack/README.md',
    },
  },
  {
    entryPoints: ['../library-sources/ms/src/index.ts'],
    output: 'library-api/ms',
    pagination: true,
    sidebar: {
      collapsed: true,
    },
    tsconfig: '../library-sources/ms/tsconfig.json',
    typeDoc: {
      readme: '../library-sources/ms/readme.md',
    },
  }
];