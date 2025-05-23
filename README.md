# UI

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

UI react component library based on [shadcn/ui](https://ui.shadcn.com/)

Read [Documentation 📘](https://ui.larislab.com)

## Installation

[![npm version](https://badge.fury.io/js/@larislab%2Fui.svg)](https://www.npmjs.com/package/@larislab/ui)
[![npm](https://img.shields.io/npm/dt/@larislab/ui)](https://www.npmjs.com/package/@larislab/ui)

### 1. Install package

```bash
npm i @larislab/ui tailwindcss-animate lucide-react
```

### 2. Update `tailwind.config.ts` / `tailwind.config.mjs`

```ts
export default {
    content: ['src/**/*.{js,jsx,mdx,ts,tsx}', 'node_modules/@larislab/ui/dist/**/*.js'],
    plugins: [require('@larislab/ui/plugin'), require('tailwindcss-animate')],
}
```

### 3. Wrap content to provider

```tsx
<UiProvider>...</UiProvider>
```

That's it! You're ready to use the components.
