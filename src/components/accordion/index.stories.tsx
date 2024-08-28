import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '.'

const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    render: (args) => (
        <Accordion className="w-[300px]" {...args}>
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
    argTypes: {
        type: {
            options: ['single', 'multiple'],
            control: 'radio',
        },
        collapsible: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        type: 'single',
        collapsible: true,
    },
}
