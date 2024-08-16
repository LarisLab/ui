import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.ts', '../src/**/*.stories.tsx'],
    addons: [
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
}
export default config
