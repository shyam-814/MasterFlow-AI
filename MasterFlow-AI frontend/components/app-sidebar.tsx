import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'
import { CogIcon, Home, LogOutIcon, ShoppingCartIcon, ToolCase, WorkflowIcon } from 'lucide-react'
import { link } from 'fs'
import { DropdownMenu, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'
import UserMenuSidebar from './user-menu-sidebar'
import Link from 'next/link'

const sidebarItems = [
    { title: "Home", link: "/", icon: Home },
    { title: "Workflows", link: "/workflows", icon: WorkflowIcon },
    { title: "My Tools", link: "/my-tools", icon: ToolCase },
    { title: "Marketplace", link: "/marketplace", icon: ShoppingCartIcon },
    { title: "Settings", link: "/settings", icon: CogIcon },
]


export default function AppSidebar() {
    return (
        <Sidebar variant='floating'>
            {/* <SidebarHeader>
                Flows AI
            </SidebarHeader> */}
            <SidebarContent>
                <SidebarGroup>
                    {/* <SidebarGroupLabel>My Account</SidebarGroupLabel> */}
                    {sidebarItems.map((item) => (
                        <SidebarMenuItem key={item.title} className='my-1 px-1' >
                            <SidebarMenuButton asChild variant={"outline"} size={"lg"} >
                             <Link key={item.title} href={item.link} className='flex items-center justify-start'>
                                 <item.icon/>
                                 <span>{item.title}</span>
                             </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <UserMenuSidebar/>
            </SidebarFooter>
        </Sidebar>
    )
}
