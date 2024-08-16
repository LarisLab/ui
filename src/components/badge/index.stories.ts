import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '.'

const meta = {
    title: 'Components/Badge',
    component: Badge,
    argTypes: {
        variant: {
            control: {
                type: 'select',
            },
            type: {
                name: 'enum',
                value: ['default', 'secondary', 'destructive', 'outline'],
            },
            table: {
                defaultValue: {
                    summary: 'default',
                },
            },
        },
        children: {
            type: {
                name: 'string',
            },
        },
    },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'default',
        children: 'Default',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary',
    },
}

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Destructive',
    },
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline',
    },
}
