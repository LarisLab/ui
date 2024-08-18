import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '.'

const meta = {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        children: {
            control: {
                disable: true,
            },
        },
    },
    args: {
        children: (
            <Card>
                <CardHeader>
                    <CardTitle>Card Header</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>Card content</CardContent>
                <CardFooter>Card footer</CardFooter>
            </Card>
        ),
    },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
