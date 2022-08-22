import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    console.log(req.query);
    //const { id } = req.query;
    const { query: { id }, session: { user } } = req;
    const cleanId = Number(id);
    const product = await client.product.findUnique({
        where: {
            id: Number(id),
            //id: +id?.toString(),
        },
        include: {
            //user: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    avatar: true,
                }
            }
        },
    });
    const terms = product?.name.split(" ").map((word) => ({
        name: {
            contains: word,
        }
    }));
    // console.log(product);
    console.log(terms);
    const relatedProducts = await client.product.findMany({
        where: {
            OR: terms,
            AND: {
                id: {
                    not: product?.id,
                }
            }
        }
    })
    console.log(relatedProducts);
    const isLiked = Boolean(await client.fav.findFirst({
        where: {
            productId: product?.id,
            userId: user?.id,
        },
        select: {
            id: true,
        },
    }))
    console.log(isLiked);
    res.json({ ok: true, product, isLiked, relatedProducts });
}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler,
    })
);