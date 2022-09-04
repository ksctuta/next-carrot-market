/* eslint-disable @next/next/no-typos */
import type { NextPage } from "next";
import FloatingButton from "@components/floating-button";
import Item from "@components/item";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import Head from "next/head";
import useSWR, { SWRConfig } from "swr";
import { Product } from "@prisma/client";
import Image from "next/image";
import picachu from "../public/profile/picachu.jpg";
import client from "@libs/server/client";
// import "@libs/server/client";

export interface ProductWithCount extends Product {
  _count: {
    favs: number;
  };
}

interface productResponse {
  ok: boolean;
  products: ProductWithCount[];
}

// const Home: NextPage<{ products: ProductWithCount[] }> = ({ products }) => {
const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR<productResponse>("/api/products");
  return (
    <Layout title="홈" hasTabBar seoTitle="Home">
      <div className="flex flex-col space-y-5 divide-y">
        {data
          ? data?.products?.map((product, i) => (
              <Item
                id={product.id}
                key={product.id}
                title={product.name}
                price={product.price}
                comments={1}
                hearts={product._count?.favs || 0}
                image={product.image}
              />
            ))
          : "Loading..."}
        {/* {products?.map((product, i) => (
          <Item
            id={product.id}
            key={product.id}
            title={product.name}
            price={product.price}
            comments={1}
            hearts={product._count?.favs || 0}
            image={product.image}
          />
        ))} */}
        <FloatingButton href="/products/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
      {/* <Image src={picachu} placeholder="blur" quality={100}></Image> */}
    </Layout>
  );
};

const Page: NextPage<{ products: ProductWithCount[] }> = ({ products }) => {
  return (
    <SWRConfig
      value={{
        fallback: {
          "/api/products": {
            ok: true,
            products,
          },
        },
      }}
    >
      <Home />
    </SWRConfig>
  );
};
export async function getServerSideProps() {
  console.log("SSR")
  const products = await client.product.findMany({});
  //await new Promise(resolve => setTimeout(resolve, 1000))
  console.log(products);
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default Page;
