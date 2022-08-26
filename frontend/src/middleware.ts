import { NextResponse, NextRequest } from 'next/server'
import { protectedRoutes } from './constants/routes'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL('/', req.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: protectedRoutes,
}