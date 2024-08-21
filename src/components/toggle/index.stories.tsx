import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Toggle } from '.'

const meta = {
    title: 'Components/Toggle',
    component: Toggle,
    args: {
        children: 'Toggle',
    },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
