import Layout from "@components/layout";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import Link from "next/link";

interface Post {
  title: string;
  date: string;
  category: string;
  slug: string;
}

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout canGoBack title="Blog" seoTitle="Blog">
      <h1 className="font-semiblod text-lg text-center mb-10 mt-5">
        Latest Posts:
      </h1>
      {posts.map((post, index) => (
        <div key={index} className="mb-5">
          <Link href={`/blog/${post.slug}`}>
            <a>
              <span className="text-lg text-red-500">{post.title}</span>
              <div>
                <span>
                  {post.date} / {post.category}
                </span>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export async function getStaticProps() {
  const blogPosts = readdirSync("./posts").map((file) => {
    const content = readFileSync(`./posts/${file}`, "utf-8");
    const [slug, _] = file.split(".");
    return { ...matter(content).data, slug };
    console.log(matter(content));
  });

  console.log(blogPosts);

  return {
    props: {
      posts: blogPosts.reverse(),
    },
  };
}

export default Blog;
// 디렉토리 읽음
//   const filesDir = readdirSync("./posts");
//   console.log(filesDir);

// 파일
// --- 마크다운 파일에 관련된 데이터를 제공해줌 posts 01-first-post.md 참조
//   readdirSync("./posts").forEach((file) => {
//     const content = readFileSync(`./posts/${file}`, "utf-8");
//     console.log(matter(content));
//   });

// gray-matter: files에 있는 front-matter를 파싱할 수 있도록 해줌.
// https://github.com/jonschlinkert/gray-matter
