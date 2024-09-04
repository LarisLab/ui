import type { Preview } from '@storybook/react'

import './global.css'
import '@fontsource-variable/inter'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'centered',
        options: {
            storySort: {
                order: ['Introduction', 'Colors', 'Components'],
            },
        },
    },
    tags: ['autodocs'],
}

export default preview
