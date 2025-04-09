import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Alert, AlertDescription, AlertTitle } from '.'
import { AlertCircleIcon, TerminalIcon } from 'lucide-react'

const meta = {
    title: 'Components/Alert',
    component: Alert,
    render: (args) => (
        <Alert {...args}>
            <TerminalIcon className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
        </Alert>
    ),
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'default',
    },
}

export const Destructive: Story = {
    render: (args) => (
        <Alert {...args}>
            <AlertCircleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
        </Alert>
    ),
    args: {
        variant: 'destructive',
    },
}
