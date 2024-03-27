"use client";

import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { useRoute } from "@/hooks/use-route";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export const CollapsedMenu = () => {
  const routes = useRoute();
  const nextRoute = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MenuIcon className="h-[1.2rem] w-[1.2rem] lg:hidden" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {routes &&
          routes.map((route) => (
            <DropdownMenuItem
              key={route.href}
              onClick={() => {
                nextRoute.push(route.href);
              }}
            >
              <Link
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary block",
                  route.active
                    ? "text-black dark:text-white"
                    : "text-muted-foreground"
                )}
              >
                {route.label}
              </Link>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
