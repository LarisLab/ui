# UI

UI react component library based on [shadcn/ui](https://ui.shadcn.com/)

## Installation

### 1. Install package

```
npm i @larislab/ui tailwindcss-animate lucide-react
```

### 2. Update `tailwind.config.ts` / `tailwind.config.mjs`

```ts
export default {
    content: ['src/**/*.{js,jsx,mdx,ts,tsx}', 'node_modules/@larislab/ui/dist/**/*.js'],
    plugins: [require('@larislab/ui/plugin'), require('tailwindcss-animate')],
}
```

That's it! You're ready to use the components.
