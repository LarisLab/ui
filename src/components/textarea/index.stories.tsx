import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '.'

const meta = {
    title: 'Components/Textarea',
    component: Textarea,
    args: {
        defaultValue:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AutoSize: Story = {
    args: {
        // autoSize: true,
        minRows: 2,
        maxRows: 4,
    },
}
