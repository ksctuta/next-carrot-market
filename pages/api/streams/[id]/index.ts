import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    const {
        query: { id },
        session: { user }
    } = req;
    const stream = await client.stream.findUnique({
        where: {
            id: Number(id),
        },
        // include
        select: {
            createdAt: true,
            description: true,
            id: true,
            name: true,
            price: true,
            updatedAt: true,
            userId: true,
            cloudflareId: true,
            messages: {
                select: {
                    id: true,
                    message: true,
                    user: {
                        select: {
                            avatar: true,
                            id: true,
                        },
                    },
                },
            },
        },
    });
    // 소유자 확인 하여 소유자일 경우
    const isOwner = stream?.userId === user?.id
    const ownedStream = await client.stream.findUnique({
        where: {
            id: Number(id),
        },
        include: {           
            messages: {
                select: {
                    id: true,
                    message: true,
                    user: {
                        select: {
                            avatar: true,
                            id: true,
                        },
                    },
                },
            },
        },
    });
    res.json({ ok: true, stream: isOwner ? ownedStream : stream });
    // db 한번에 사용 시 
    // const streams = await client.stream.findUnique({
    //     where: {
    //         id: Number(id),
    //     },
    //     include: {           
    //         messages: {
    //             select: {
    //                 id: true,
    //                 message: true,
    //                 user: {
    //                     select: {
    //                         avatar: true,
    //                         id: true,
    //                     },
    //                 },
    //             },
    //         },
    //     },
    // });
    
    // if(streams && !isOwner){
    //     streams.cloudflareKey = "xxxxx";
    //     streams.cloudflareUrl = "xxxxx";        
    // }
    // res.json({ ok: true, stream });
    
}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler,
    })
);