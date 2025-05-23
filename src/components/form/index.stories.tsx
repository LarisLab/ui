import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, FormSubmit, useForm } from '.'
import { Input } from '../input'

const meta = {
    title: 'Components/Form',
    render: (args) => {
        const form = useForm<{
            username: string
        }>({
            defaultValues: {
                username: 'My name',
            },
        })

        const onSubmit = form.handleSubmit(async (data) => {
            await new Promise((resolve) => setTimeout(resolve, 2000))

            alert(JSON.stringify(data, null, 2))
        })

        return (
            <form {...args} onSubmit={onSubmit} className="space-y-4">
                <Form {...form}>
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
                    <FormSubmit>Submit</FormSubmit>
                </Form>
            </form>
        )
    },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
