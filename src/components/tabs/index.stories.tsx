import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '.'

const meta = {
    title: 'Components/Tabs',
    component: Tabs,
    render: (args) => (
        <Tabs {...args} defaultValue="account" className="w-[400px]">
            <TabsList className="w-full">
                <TabsTrigger value="account" className="w-full">
                    Account
                </TabsTrigger>
                <TabsTrigger value="password" className="w-full">
                    Password
                </TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
    ),
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
