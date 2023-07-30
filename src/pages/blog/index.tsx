import { NextPage } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { frontMatterBlog } from "@/data/config";
import { MainLayout } from "@/components";
import { BlogTitle, CardBlog } from "@/components";

import { getAllFilesMetaData } from "../../../lib/mdx";

interface TypeProps {
  id: number, 
  title: string,
  img: string,
  slug: string
  description: string
}
interface Props {
  posts: TypeProps[]
}
const Blog: NextPage<Props> = ({posts}) => {
  return (
    <MainLayout
      title={frontMatterBlog.title}
      description={frontMatterBlog.description}
      font={inter.className}
    >
      <div
        className="flex justify-center items-center flex-col sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 lg:pt-6 pt-[80px]"
        id="blog"
      >
        <BlogTitle />

        <div className="flex items-center xl:max-w-[1280px] w-full lg:flex-row flex-col mx-auto gap-2 flex-wrap">
          {posts.map((post) => (
            <CardBlog
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              img={post.img}
              to={`/blog/${post.slug}`}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesMetaData("data/blog");
  return {
    props: {posts}
  }
}


export default Blog;


