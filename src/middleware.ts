import { auth } from "@/shared/nextauth";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export default auth(
  async function middleware(request: NextApiRequest) {
    const token = await auth()
    const {pathname} = new URL(request.url as string, `http://${request.headers.host}`)
    if (token && pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/", request.url))
    }
    if (!token && !pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  },
);

export const config = {
  matcher: ["/((?!api/auth/*|_next/static|_next/image|favicon.ico).*)"],
}