import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Label } from '.'
import { Checkbox } from '../checkbox'

const meta = {
    title: 'Components/Label',
    component: Label,
    render: (args) => (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" {...args}>
                Accept terms and conditions
            </Label>
        </div>
    ),
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
