import { NextApiRequest, NextApiResponse } from "next";

import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import twilio from "twilio";
import mail from "@sendgrid/mail"

mail.setApiKey(process.env.SENDGRID_API_KEY!);

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

// 필수로 export default 를 해줘야함 nextjs에서 라우트 하려면
// 현재는 하단에 withHandler와 함께 사용중
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 90000) + "";

  // 토큰 생성시 유저 없으면 유저를 만들고 연결시킴
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
          // id: user.id,
        },
        // connect: {
        //   id: user.id,
        // },
      },
    },
  });
  console.log(token);

  // 문자 메시지 서비스
  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MSID,
    //   to: process.env.MY_PHONE,
    //   // to: phone
    //   body: `휴대폰 로그인을 위한 토큰은 ${payload} 입니다.`,
    // });
    // console.log(message);
  }
  // 이메일 서비스
  else if(email){
    // const email = await mail.send({
    //   from: "ksctuta@gmail.com",
    //   // to 상대방 이메일
    //   to: "shiningwolf@naver.com",
    //   subject: "Your Carrot Market Verification Email",
    //   text: `이메일 로그인을 위한 토큰은 ${payload} 입니다.`,
    //   html: `<strong>이메일 로그인을 위한 토큰은 ${payload} 입니다.</strong>`,
    // })
    // console.log(email);
  }

  return res.json({
    ok: true,
  });
  // es6 기능 객체안에 if else 사용 version
  // const user = await client.user.upsert({
  //   where: {
  //     // 더 줄이면 위에 payload 사용 가능
  //     ...payload,
  //     // 아랫 부분과 동일
  //     // ...(phone && {phone: +phone}),
  //     // ...(email && {email}),
  //     // 윗 부분가 동일
  //     // ...(phone ? { phone: +phone } : {}),
  //     // ...(email ? { email } : {}),
  //   },
  //   create: {
  //     name: "Anonymous",
  //     ...payload,
  //     // ...(phone ? { phone: +phone } : {}),
  //     // ...(email ? { email } : {}),
  //   },
  //   update: {},
  // });
}
export default withHandler("POST", handler);
//let user;
// 기본 응용 2번
// if (phone) {
//   user = await client.user.upsert({
//     where: {
//       phone: +phone,
//     },
//     create: {
//       name: "Anonymous",
//       phone: +phone,
//     },
//     update: {},
//   });
// } else if (email) {
//   user = await client.user.upsert({
//     where: {
//       email,
//     },
//     create: {
//       name: "Anonymous",
//       email,
//     },
//     update: {},
//   });
// }

// 기본 1번
// if (email) {
//   user = await client.user.findUnique({
//     where: {
//       email,
//     },
//   });
//   if (user) {
//     console.log("found it");
//   }
//   if (!user) {
//     console.log("Did not find. Will create.");
//     user = await client.user.create({
//       data: {
//         name: "Anonymous",
//         email,
//       },
//     });
//   }
//   console.log(user);
// }

// if (phone) {
//   user = await client.user.findUnique({
//     where: {
//       phone: +phone, // +를 쓰면 숫자로 변경
//     },
//   });
//   if (user) {
//     console.log("found it");
//   }
//   if (!user) {
//     console.log("Did not find. Will create.");
//     user = await client.user.create({
//       data: {
//         name: "Anonymous",
//         phone: +phone,
//       },
//     });
//   }
//   console.log(user);
// }
//console.log(req.body);
// res.status(200).end();
//res.json({ok:true})

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
