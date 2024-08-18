import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Switch } from '.'
import { Label } from '../label'

const meta = {
    title: 'Components/Switch',
    component: Switch,
    render: (args) => (
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" {...args} />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
    ),
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
