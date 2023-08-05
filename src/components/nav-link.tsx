"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
export default function NavLink({
  href,
  className,
  children,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      {...props}
      className={cn(
        className,
        "text-sm text-gray-600 font-medium",
        pathname === href && "text-gray-900"
      )}
    >
      {children}
    </Link>
  );
}
