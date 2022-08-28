import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

// cloudflare request
// curl --request POST \
//  --url https://api.cloudflare.com/client/v4/accounts/<ACCOUNT_ID>/images/v2/direct_upload \
//  --header 'Authorization: Bearer <API_TOKEN>' \
//  --form 'requireSignedURLs=true' \
//  --form 'metadata={"key":"value"}'

// cloudflare response
// {
//     "result": {
//       "id": "2cdc28f0-017a-49c4-9ed7-87056c83901",
//       "uploadURL": "https://upload.imagedelivery.net/2cdc28f0-017a-49c4-9ed7-87056c83901"
//     },
//     "result_info": null,
//     "success": true,
//     "errors": [],
//     "messages": []
//   }
async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    const response = await (await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUD_FLARE_ACCOUNT_ID}/images/v1/direct_upload`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.CLOUD_FLARE_IMAGES_TOKEN}`
            }
        }
    )
    ).json();
        console.log(response);
    res.json({
        ok: true,
        ...response.result,
    });
}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler,
    })
);