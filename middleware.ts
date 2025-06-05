import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';


const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/projects(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    //console.log("req:", req);
    if (isProtectedRoute(req)) await auth.protect();
});

export const config = {
    matcher: ["/((?!.*\\..*|_next|.well-known).*)", "/", "/(api|trpc)(.*)"],
  };

