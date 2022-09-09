// middleware.ts
import { NextRequest, NextFetchEvent, NextResponse, userAgent } from 'next/server'

export function middleware(request: NextRequest, ev: NextFetchEvent) {
    
    //console.log("global middleware")
    const { isBot } = userAgent(request);
    //console.log(isBot)

    const cookie = request.cookies.get('carrotsession');
    //console.log(cookie);

    if (request.nextUrl.pathname.startsWith('/chats')) {
        const ua = userAgent(request);
        //console.log(ua);        
        if (ua?.isBot) {
            //console.log('plz don\'t be human')
            //console.log(request.nextUrl.clone())
            const url = request.nextUrl.clone();
            url.pathname = "/enter";
            return NextResponse.redirect(url);
        }
    }
    
    if (!request.url.includes('/_next') &&
        !request.url.includes('/favicon') &&
        !request.url.includes("/api") &&
        !request.url.includes("/enter") &&
        !request.cookies.get('carrotsession')
    ) {
        console.log('hello')
        console.log(request.geo);
        const url = request.nextUrl.clone();
        url.pathname = "/enter";
        return NextResponse.redirect(url);
    }
    

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
