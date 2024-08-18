import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '.'
import { Button } from '../button'

const meta = {
    title: 'Components/DropdownMenu',
    component: DropdownMenu,
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        children: [
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>,
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Status Bar</DropdownMenuItem>
            </DropdownMenuContent>,
        ],
    },
} satisfies Meta<typeof DropdownMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
