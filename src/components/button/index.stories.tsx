import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'
import React from 'react'
import { SaveIcon } from 'lucide-react'

const meta = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: 'radio',
        },
        size: {
            control: 'radio',
        },
        loading: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
    },
    args: {
        variant: 'primary',
        children: 'Primary',
        loading: false,
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
    render: (args) => (
        <div className="space-x-2">
            <Button {...args} variant={'primary'}>
                Primary
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
            <Button {...args} size={'sm'}>
                Small
            </Button>
            <Button {...args} size={'md'}>
                Medium
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

export const Loading: Story = {
    render: (args) => (
        <div className="space-x-2">
            <Button {...args} variant={'primary'}>
                Primary
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
    args: {
        loading: true,
    },
}

export const OnClick: Story = {
    render: (args) => (
        <div className="space-x-2">
            <Button {...args} onClick={() => new Promise((resolve) => setTimeout(resolve, 1000))}>
                Load
            </Button>
            <Button {...args} icon={<SaveIcon />} onClick={() => new Promise((resolve) => setTimeout(resolve, 1000))}>
                Load with icon
            </Button>
            <Button
                {...args}
                onClick={() => new Promise((_, reject) => setTimeout(() => reject(new Error('Unknown error')), 1000))}
            >
                Load to fail
            </Button>
        </div>
    ),
}
