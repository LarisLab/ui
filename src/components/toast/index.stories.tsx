import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Toaster as OrgToaster, toast } from '.'
import { Button } from '../button'
import { createPortal } from 'react-dom'

function Toaster() {
    return createPortal(<OrgToaster />, document.body)
}

const meta = {
    title: 'Components/Toast',
    component: Toaster,
    render: (args) => (
        <div {...args} className="w-full">
            <Toaster />
            <Button
                onClick={() =>
                    toast({
                        title: 'Hello world!',
                    })
                }
            >
                Toast
            </Button>
        </div>
    ),
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
