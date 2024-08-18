import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '.'
import { Button } from '../button'

const meta = {
    title: 'Components/Collapsible',
    component: Collapsible,
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        children: [
            <CollapsibleTrigger asChild>
                <Button variant="outline">Trigger</Button>
            </CollapsibleTrigger>,
            <CollapsibleContent>Content</CollapsibleContent>,
        ],
    },
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
