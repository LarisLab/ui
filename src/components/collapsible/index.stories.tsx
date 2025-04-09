import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '.'
import { Button } from '../button'

const meta = {
    title: 'Components/Collapsible',
    component: Collapsible,
    render: (args) => (
        <Collapsible {...args}>
            <CollapsibleTrigger asChild>
                <Button variant="outline">Trigger</Button>
            </CollapsibleTrigger>
            <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
    ),
} satisfies Meta<typeof Collapsible>
type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {}
