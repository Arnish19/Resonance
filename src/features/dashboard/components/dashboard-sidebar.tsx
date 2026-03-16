"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

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
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar";

import { Skeleton } from "@/components/ui/skeleton";
import {OrganizationSwitcher, UserButton, useClerk} from "@clerk/nextjs";

import {
    type LucideIcon,
    Home,
    LayoutGrid,
    AudioLines,
    Volume2,
    Settings,
    Headphones,
} from "lucide-react";

import Link from "next/link";

interface MenuItem {
    title: string;
    url?: string;
    icon: LucideIcon;
    onClick?: () => void;
};

interface NavSectionProps {
    label?: string;
    items: MenuItem[];
    pathname: string;
};

function NavSection({ label, items, pathname }: NavSectionProps) {
    return (
        <SidebarGroup>
            {label && (
                <SidebarGroupLabel className="text-[13px] uppercase
                text-muted-foreground">
                    {label}
                </SidebarGroupLabel>    
            )}
        </SidebarGroup>
    );
}
