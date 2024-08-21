import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { ToggleGroup, ToggleGroupItem } from '.'
import { Bold, Italic, Underline } from 'lucide-react'

const meta = {
    title: 'Components/ToggleGroup',
    component: ToggleGroup,
    render: (args) => (
        <ToggleGroup {...args}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
    args: {
        type: 'multiple',
    },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
