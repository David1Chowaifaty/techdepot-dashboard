import LoginForm from "@/components/login-form";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Sign In",
};
export default function Login() {
  return (
    <main className="flex flex-col py-10 items-center  min-h-screen w-full px-4 md:px-5 lg:px-10 lg:justify-center">
      <h1 className="text-lg font-medium md:text-2xl lg:text-3xl mb-8">
        Login
      </h1>
      <LoginForm />
      <div className="flex items-center text-sm mt-6 text-gray-800">
        <p>{`Don't have an account?`}</p>
        <Link
          href={"/register"}
          className={buttonVariants({ variant: "link" })}
        >
          Register.
        </Link>
      </div>
    </main>
  );
}
