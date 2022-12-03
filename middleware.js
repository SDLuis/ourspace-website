import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware (request) {
  const cookie = request.cookies.get('ourspace')?.value
  const secret = new TextEncoder().encode('ourspace')

  if (cookie) {
    await jwtVerify(cookie, secret)
    return NextResponse.next()
  }
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
}
