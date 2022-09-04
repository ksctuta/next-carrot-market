import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

declare module "iron-session" {
    interface IronSessionData {
      user?: {
        id: number;
      };
    }
  }
  
const CookieOptions = {
    cookieName: "carrotsession",
    password: process.env.COOKIE_PASSWORD!,
}

export function withApiSession(fn: any){
    return withIronSessionApiRoute(fn, CookieOptions);
}

// getStaticProps 인증 가능
export function withSsrSession(handler:any){
  return withIronSessionSsr(handler, CookieOptions)
}