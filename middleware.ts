// middleware.ts
import { NextRequest, NextFetchEvent, NextResponse, userAgent } from 'next/server'

export function middleware(request: NextRequest, ev: NextFetchEvent) {
    console.log("global middleware")
}
//     //const { device } = userAgent(request)
//     const { isBot } = userAgent(request);
//     //const cookie = request.cookies.get('carrotsession');
//     console.log(request.nextUrl.origin + '/enter');    
//     // console.log(request.url);
//     if (!request.url.includes("/api")) {
//         if (request.nextUrl.pathname.startsWith("/enter")) {

//         }
//         else{
//             console.log('me');
//             return NextResponse.redirect(new URL(request.nextUrl.origin + `/enter`))
//         }
//     }
//     //request.geo.
//     // if(request.nextUrl.pathname === "/enter"){

//     // }
//     // else{
//     //     if(!request.cookies.carrotsession){
//     //         request.nextUrl.pathname = '/enter'
//     //         return NextResponse.redirect(request.nextUrl)
//     //         //return NextResponse.redirect("/enter");
//     //         //return NextResponse.redirect(`${request.nextUrl.origin}/enter`)
//     //     }
//     // }

// }
