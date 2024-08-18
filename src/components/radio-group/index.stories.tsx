import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { RadioGroup, RadioGroupItem } from '.'
import { Label } from '../label'

const meta = {
    title: 'Components/RadioGroup',
    component: RadioGroup,
    argTypes: {
        disabled: {
            control: 'boolean',
        },
        onValueChange: {
            control: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <RadioGroup defaultValue="comfortable" {...args}>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
            </div>
        </RadioGroup>
    ),
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
