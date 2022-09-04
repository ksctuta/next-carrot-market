// prisma seeding : 기본적으로 데이터베이스에 가짜 데이터를 엄청 빨리 생성함.
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
// 해당 프로젝트에서는 많은 라이브 스트림을 엄청 빨리 생성하기 위해 사용했음
async function main() {
    [...Array.from(Array(500).keys())].forEach(async (item) => {
      await client.stream.create({
        //@ts-ignore
        data: {
          name: String(item),
          description: String(item),
          price: item,
          user: {
            connect: {
              id: 16,
            },
          },
        },
      });
      console.log(`${item}/500`);
    });
  }
  
  main()
    .catch((e) => console.log(e))
    .finally(() => client.$disconnect());