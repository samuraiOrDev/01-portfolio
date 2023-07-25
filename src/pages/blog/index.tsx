import { NextPage } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { frontMatterBlog } from "@/data/config";
import { MainLayout } from "@/components";
import Image from "next/image";
import { BlogTitle, CardBlog } from "@/components";
import { descriptionBlog } from "@/data";
const Blog: NextPage = () => {
  return (
    <MainLayout
      title={frontMatterBlog.title}
      description={frontMatterBlog.description}
      font={inter.className}
    >
      <div
        className="flex justify-center items-center flex-col sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 lg:pt-6 pt-[80px] overflow-x-hidden"
        id="blog"
      >
        <BlogTitle />

        <div className="flex items-center xl:max-w-[1280px] w-full lg:flex-row flex-col mx-auto gap-2 flex-wrap">
          {
            descriptionBlog.map (post => <CardBlog  key={post.id} id={post.id} title={post.title} description={post.description} img={post.img} to={post.to} />)
          }
          
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
