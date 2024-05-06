import { NextResponse } from 'next/server';

export interface ActionData {
    error?: string;
}

export async function action({ request }: { request: Request }) {
    const formData = await request.formData();
    const password = formData.get('password');
    const expectedPassword = "yourPassword";

    if (password === expectedPassword) {
        const response = NextResponse.redirect(new URL('/en/admin/protected', request.url));
        response.cookies.set('SiteReadCookie', password, { path: '/', maxAge: 86400 }); // Set for 1 day
        return response;
    }

    return { error: 'Invalid password' };
}
