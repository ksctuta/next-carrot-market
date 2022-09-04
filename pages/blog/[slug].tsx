import { readdirSync } from "fs";
import { GetStaticProps, NextPage } from "next";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import Layout from "@components/layout";

const Post: NextPage<{ post: string; data: any }> = ({ post, data }) => {
  return (
    <Layout canGoBack title={data.title} seoTitle={data.title}>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post }}
      />
    </Layout>
  );
};

export function getStaticPaths() {
  // (1) 미리 만들때
  // const files = readdirSync("./posts").map((file) => {
  //   const [name, extension] = file.split(".");
  //   return { params: { slug: name } };
  // });
  // console.log(files);
  // return {
  //   paths: files,
  //   fallback: false,
  // };

  // (2) 블로킹 처리할때 
  return {
    paths: [],
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  //console.log(ctx);
  //console.log(ctx.params?.slug);
  const { content, data } = matter.read(`./posts/${ctx.params?.slug}.md`);
  //console.log(data, content);
  //   const { value } = await unified()
  //     .use(remarkParse)
  //     .use(remarkHtml)
  //     .process(content);
  const html = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);
  //console.log(html.value);
  return {
    props: {
      data,
      post: html.value,
    },
  };
};
export default Post;
