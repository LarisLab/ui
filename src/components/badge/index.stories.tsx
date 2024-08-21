import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Badge } from '.'

const meta = {
    title: 'Components/Badge',
    component: Badge,
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Default',
    },
}

export const Variants: Story = {
    render: (args) => (
        <div className="space-x-2">
            <Badge {...args}>Default</Badge>
            <Badge {...args} variant={'secondary'}>
                Secondary
            </Badge>
            <Badge {...args} variant={'outline'}>
                Outline
            </Badge>
            <Badge {...args} variant={'destructive'}>
                Destructive
            </Badge>
        </div>
    ),
}
