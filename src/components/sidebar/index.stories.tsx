import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from '.'
import { HomeIcon } from 'lucide-react'
import { Skeleton } from '../skeleton'

const meta = {
    title: 'Components/Sidebar',
    component: Sidebar,
    render: (args) => (
        <div className="w-[600px] overflow-hidden">
            <SidebarProvider>
                <Sidebar {...args}>
                    <SidebarHeader />
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Application</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <HomeIcon />
                                            <span>Home</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter />
                </Sidebar>
                <main className="w-full">
                    <SidebarTrigger />
                    <Skeleton className="w-full h-96" />
                </main>
            </SidebarProvider>
        </div>
    ),
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
