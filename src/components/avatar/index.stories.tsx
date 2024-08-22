import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '.'

const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    render: (args) => (
        <Avatar {...args}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    ),
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
