import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";

// 필수로 export default 를 해줘야함 nextjs에서 라우트 하려면
// 현재는 하단에 withHandler와 함께 사용중
async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  res.status(200).end();
  //res.json({ok:true})
}
export default withHandler("POST", handler);
// async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "POST") {
//     res.status(401).end();
//   }
//   console.log(req.body);
//   //res.json({ ok: true });
//   res.status(200).end();
// }


  // console.log(req.body.email);
  // res.status(200).end();
// 1
// export default function handler(
//     req:NextApiRequest,
//     res:NextApiResponse
// ){
//     res.json({
//         ok:true,
//         data: "xx",
//     })
// }

// 2
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   await client.user.create({
//     data: {
//       email: "hi",
//       name: "hi",
//     },
//   });
//   res.json({
//     ok: true,
//     data: "xx",
//   });
// }
