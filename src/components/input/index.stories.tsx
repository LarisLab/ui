import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '.'

const meta = {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        placeholder: {
            control: 'text',
        },
        type: {
            control: 'radio',
            options: ['text', 'password', 'email', 'number', 'file'],
        },
    },
    args: {
        placeholder: 'Placeholder',
    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
