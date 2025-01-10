import type { Preview } from '@storybook/react'
import { UiProvider } from '../src'

import './global.css'
import '@fontsource-variable/inter'
import React from 'react'

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
                order: ['Introduction', 'Colors', 'Changelog', 'Components'],
            },
        },
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <UiProvider>
                <div className="flex gap-2 items-center justify-center w-full">
                    <Story />
                </div>
            </UiProvider>
        ),
    ],
}

export default preview
