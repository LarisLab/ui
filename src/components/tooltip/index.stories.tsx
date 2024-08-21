import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '.'
import { Button } from '../button'

const meta = {
    title: 'Components/Tooltip',
    component: Tooltip,
    render: (args) => (
        <TooltipProvider {...args}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add to library</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ),
    args: {
        delayDuration: 200,
    },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
