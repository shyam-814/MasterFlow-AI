import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { ChevronsDownUpIcon, ChevronsUpDownIcon, LogOutIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'
import { ModeToggle } from './mode-toggle'

export default function UserMenuSidebar() {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger className='flex gap-2 items-center' asChild>
                <SidebarMenuButton size={"lg"} className='outline-none'>
                    <Avatar>
                        <AvatarImage />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col'>
                        <span className='font-xs'>Charlie Nguyen</span>
                        <span className='text-sm text-muted-foreground'>
                            email@gmail.com
                        </span>
                    </div>

                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='center' className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg">
                <DropdownMenuItem className='flex items-center gap-2'>
                    <LogOutIcon className='h-3 w-3' />
                    <span>Log Out</span>
                </DropdownMenuItem>
                <DropdownMenuItem className='flex items-center gap-2'>
                    <ModeToggle/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
