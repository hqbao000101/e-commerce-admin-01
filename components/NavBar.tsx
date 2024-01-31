import React from "react";
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import MainNav from "@/components/MainNav";
import StoreSwitcher from "@/components/StoreSwitcher";
import prismadb from "@/lib/prismadb";
import { ModeToggle } from "@/components/mode-toggle";

const NavBar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="flex items-center ml-auto space-x-4">
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
