import { PrismaClient } from "@prisma/client";

// declare global {
//   var client: PrismaClient | undefined;
// }

// const client = global.client || new PrismaClient();

// if (process.env.NODE_ENV === "development") global.client = client;

// export default client;
declare global {
    var client: PrismaClient | undefined;
}
// new PrismaClient({ log: ["query"] });
const client = global.client || new PrismaClient({ log: ["query"] });
if (process.env.NODE_ENV === "development") global.client = client;
export default client;
//export default new PrismaClient();

// const client = new PrismaClient();
// export default client;
// client.user.create({data:{
//     email: "hi",
//     name: "hi"
// }})