"use client";

import React from "react";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRoute } from "@/hooks/use-route";

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const routes = useRoute();

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes && routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
