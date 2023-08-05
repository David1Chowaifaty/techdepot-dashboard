import RegisterForm from "@/components/register-form";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Register",
};
export default function Register() {
  return (
    <main className="flex flex-col py-10 items-center  min-h-screen w-full px-4 md:px-5 lg:px-10 lg:justify-center">
      <h1 className="text-lg font-medium md:text-2xl lg:text-3xl mb-8">
        Create an account
      </h1>
      <RegisterForm />
      <div className="flex items-center text-sm mt-6 text-gray-800">
        <p>{`Already have an account?`}</p>
        <Link href={"/login"} className={buttonVariants({ variant: "link" })}>
          Sign In.
        </Link>
      </div>
    </main>
  );
}
