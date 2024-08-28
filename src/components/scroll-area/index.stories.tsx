import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { ScrollArea } from '.'

const meta = {
    title: 'Components/ScrollArea',
    component: ScrollArea,
    render: (args) => (
        <ScrollArea className="h-48 w-48 rounded-md border" {...args}>
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                <div className="text-sm">v1.2.0-beta.1</div>
                <div className="text-sm">v1.2.0-beta.2</div>
                <div className="text-sm">v1.2.0-beta.3</div>
                <div className="text-sm">v1.2.0-beta.4</div>
                <div className="text-sm">v1.2.0-beta.5</div>
                <div className="text-sm">v1.2.0-beta.6</div>
                <div className="text-sm">v1.2.0-beta.7</div>
                <div className="text-sm">v1.2.0-beta.8</div>
                <div className="text-sm">v1.2.0-beta.9</div>
                <div className="text-sm">v1.2.0-beta.10</div>
            </div>
        </ScrollArea>
    ),
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
