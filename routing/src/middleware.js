import { NextResponse } from 'next/server';
export function middleware(request){
    // if(request.nextUrl.pathname!='login'){
        return NextResponse.redirect(new URL('/login',request.url))
    // }
}
export const config={
    matcher:['/about/aboutcollege/:path*','/studentlist/:path*'] 
    //if path matches aboutcollege in about or studentlist, page will gets redirected to login page.
}

//sits between components, handling tasks like data processing, authentication, and error handling.