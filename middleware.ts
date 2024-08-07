import { NextRequest, NextResponse } from 'next/server'

const WHITE_LIST = ['/', '/travel/recommended', '/recommender']

const isInWhiteList = (url: string) => {
  return WHITE_LIST.some(whitelistUrl => {
    const regex = new RegExp(`^${whitelistUrl.replace(/\[/g, '\\[').replace(/\]/g, '\\]')}`)
    return regex.test(url)
  })
}

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname

  if (!isInWhiteList(url)) return NextResponse.redirect(new URL('/recommender', req.url))
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api)(.*)'],
}
