import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Alert, AlertDescription, AlertTitle } from '.'
import { AlertCircleIcon, TerminalIcon } from 'lucide-react'

const meta = {
    title: 'Components/Alert',
    component: Alert,
    argTypes: {
        variant: {
            type: {
                name: 'enum',
                value: ['default', 'destructive'],
            },
        },
        children: {
            table: {
                disable: true,
            },
        },
    },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'default',
        children: [
            <TerminalIcon className="h-4 w-4" />,
            <AlertTitle>Heads up!</AlertTitle>,
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>,
        ],
    },
}

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: [
            <AlertCircleIcon className="h-4 w-4" />,
            <AlertTitle>Error</AlertTitle>,
            <AlertDescription>Your session has expired. Please log in again.</AlertDescription>,
        ],
    },
}
