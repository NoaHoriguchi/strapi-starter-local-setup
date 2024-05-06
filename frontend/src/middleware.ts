import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { i18n } from '../i18n-config';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

import { getToken } from 'next-auth/jwt';



// function getLocale(request: NextRequest): string | undefined {
//     // Negotiator expects plain object so we need to transform headers
//     const negotiatorHeaders: Record<string, string> = {};
//     request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//     // Use negotiator and intl-localematcher to get best locale
//     let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
//     // @ts-ignore locales are readonly
//     const locales: string[] = i18n.locales;
//     return matchLocale(languages, locales, i18n.defaultLocale);
// }

// export function middleware(request: NextRequest) {
//     const pathname = request.nextUrl.pathname;

//     // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
//     // // If you have one
//     if (
//         [
//             '/manifest.json',
//             '/favicon.ico',
//             '/ja',
//             '/tw'
//             // Your other files in `public`
//         ].includes(pathname)
//     )
//         return;

//     // Check if there is any supported locale in the pathname
//     const pathnameIsMissingLocale = i18n.locales.every(
//         (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}` && !pathname.startsWith(`/api`)
//     );

//     const localeList = [
//         "/en",
//         "/ja",
//         "/tw"
//     ]

//     const pathnameVerification = i18n.locales.every(
//         (localeList) => {
//             for (let i = 0; i < localeList.length; i++) {
//                 if (pathname.startsWith(localeList[i])) {
//                     return false
//                 }
//             }
//             return true;
//         }
//     );

//     // Redirect if there is no locale
//     // if (pathnameIsMissingLocale && pathnameVerification) {
//     //     const locale = getLocale(request);

//     //     // e.g. incoming request is /products
//     //     // The new URL is now /en-US/products
//     //     return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
//     // }
// }

// export function middleware(request: NextRequest) {
//     const url = request.nextUrl.clone();
//     const token = request.cookies.get('SiteReadCookie');
//     console.log("THIS IS THE TOKEN: " + token)
//     const expectedPassword = "yourPassword"; // The password you expect

//     // Check if we're visiting a protected route and the token is not set or invalid
//     if (url.pathname.startsWith('/en/admin/protected') && token?.value !== expectedPassword) {
//         return NextResponse.redirect(new URL('/en/admin/login', request.url));
//     }
//     return NextResponse.next();
// }

export default withMiddlewareAuthRequired();

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    // matcher: ['/((?!_next).*)'],
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};