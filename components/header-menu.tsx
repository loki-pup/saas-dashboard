"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Menu, X, Folder, CreditCard } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

  const HeaderMenu = () => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setOpen(prevOpen => !prevOpen);
    }

    return (
<DropdownMenu open={open} onOpenChange={toggleMenu}>
  <DropdownMenuTrigger asChild>
    <Button onClick={toggleMenu} className="mr-4" variant={"secondary"}>
    {open ?  <X className="w-6 h-6"/> :  <Menu className="w-6 h-6"/>}
    </Button>
    </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem asChild>
        <Link href="/dashboard" className="flex">
        <Folder className="h-4 w-4 mr-2"/>
        <span>Projects</span>
        </Link>
        </DropdownMenuItem>
    <DropdownMenuItem asChild>
    <Link href="/payments" className="flex">
        <CreditCard className="h-4 w-4 mr-2"/>
        <span>Billing</span>
        </Link>
        </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    )
  }

  export default HeaderMenu;