import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useForm } from '.'
import { Input } from '../input'

const meta = {
    title: 'Components/Form',
    render: (args) => {
        const form = useForm<{
            username: string
        }>()

        return (
            <Form {...args} {...form}>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="username" {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </Form>
        )
    },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
