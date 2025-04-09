import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
    stories: ['./stories/*', '../src/**/*.stories.ts', '../src/**/*.stories.tsx'],
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
    typescript: {
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true,

            propFilter: (prop) => (prop.parent ? !/@types\/react/.test(prop.parent.fileName) : true),
        },
        reactDocgen: 'react-docgen-typescript',
    },
}
export default config
