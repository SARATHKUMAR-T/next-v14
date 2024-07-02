import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "dashboard",
  description: "Dynamic ui",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-200">
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <div className="hidden md:block">Sign Out</div>
        </Button>
      </form>
      <div className="bg-slate-300">{children}</div>
    </main>
  );
}

export default Layout;
