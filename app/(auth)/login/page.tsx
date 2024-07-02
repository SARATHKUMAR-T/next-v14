import LoginForm from "@/app/ui/loginForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
  description: "fb.io",
};
function Page() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <LoginForm />
    </main>
  );
}

export default Page;
