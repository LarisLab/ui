import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '.'
import { Button } from '../button'
import { Input } from '../input'
import { Label } from '../label'

const meta = {
    title: 'Components/Sheet',
    component: SheetContent,
    argTypes: {
        side: {
            options: ['top', 'right', 'bottom', 'left'],
            control: 'radio',
            description: 'The side of the screen the sheet will appear from.',
        },
    },
    render: (args) => (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent {...args}>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    ),
} satisfies Meta<typeof SheetContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
