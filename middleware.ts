export { default } from "next-auth/middleware";

// MIDDLEWARE FROM NEXT WORKS THE SAME
// AND USES CONFIG???
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

export const config = {
  // :id* - zero or more params
  // :id+ - one or more
  // :id? - zero or one
  matcher: ["/users/:id*"],
};
