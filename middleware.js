import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware (request) {
  const cookie = request.cookies.get('ourspace')?.value
  const secret = new TextEncoder().encode('ourspace')

  if (request.nextUrl.pathname.includes('/home')) {
    if (cookie === undefined) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    try {
      await jwtVerify(cookie, secret)
      return NextResponse.next()
    } catch (err) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
  if (request.nextUrl.pathname.includes('/login') || request.nextUrl.pathname === '/') {
    if (cookie === undefined) {
      return NextResponse.next()
    }
    try {
      await jwtVerify(cookie, secret)
      return NextResponse.redirect(new URL('/home', request.url))
    } catch (err) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
}
