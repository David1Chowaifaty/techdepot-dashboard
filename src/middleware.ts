import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
interface User {
  role: "admin" | "user";
  username: string;
}
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const user: User | undefined = undefined;
  const user1: User = {
    role: "user",
    username: "david",
  };
  if (!user1) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/"],
};
