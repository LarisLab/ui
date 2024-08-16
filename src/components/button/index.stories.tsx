import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'
import React from 'react'

const meta = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            type: {
                name: 'enum',
                value: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
            },
            table: {
                defaultValue: {
                    summary: 'default',
                },
            },
        },
        size: {
            type: {
                name: 'enum',
                value: ['default', 'sm', 'lg', 'icon'],
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
    args: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'default',
        children: 'Default',
    },
}

export const Variants: Story = {
    render: (args) => (
        <div className="space-x-2">
            <Button {...args} variant={'default'}>
                Default
            </Button>
            <Button {...args} variant={'secondary'}>
                Secondary
            </Button>
            <Button {...args} variant={'outline'}>
                Outline
            </Button>
            <Button {...args} variant={'ghost'}>
                Ghost
            </Button>
            <Button {...args} variant={'link'}>
                Link
            </Button>
            <Button {...args} variant={'destructive'}>
                Destructive
            </Button>
        </div>
    ),
}

export const Sizes: Story = {
    args: {
        children: 'Default',
    },
    render: (args) => (
        <div className="space-x-2">
            <Button {...args} size={'default'}>
                Default
            </Button>
            <Button {...args} size={'sm'}>
                Small
            </Button>
            <Button {...args} size={'lg'}>
                Large
            </Button>
            <Button {...args} size={'icon'}>
                ...
            </Button>
        </div>
    ),
}
