import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Separator } from '.'

const meta = {
    title: 'Components/Separator',
    component: Separator,
    render: (args) => (
        <div {...args}>
            Top Text
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Link 1</div>
                <Separator orientation="vertical" />
                <div>Link 2</div>
                <Separator orientation="vertical" />
                <div>Link 3</div>
            </div>
        </div>
    ),
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
