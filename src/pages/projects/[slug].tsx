import React from "react";
import { getFileBySlug, getFiles } from "../../../lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import { MainLayout } from "@/components";
import { Inter } from "next/font/google";
import MDXComponents from "@/components/MDXComponents";
const inter = Inter({ subsets: ["latin"] });
//@ts-ignore
const Project = ({ source, frontMatter }) => {
  return (
    <MainLayout
      title={frontMatter.title + " | SamuraiOr.Dev"}
      description={frontMatter.description}
      font={inter.className}
    >
      <div
        className="flex justify-center items-center flex-col sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 lg:pt-6 pt-[80px]"
        id={`post-${frontMatter.id}`}
      >
        <div className="flex items-center xl:max-w-[768px] w-full lg:flex-row flex-col mx-auto gap-2 flex-wrap">
        <div className="mt-[160px] md:p-10 text-start">
          <MDXRemote {...source}  components={MDXComponents}/>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
//@ts-ignore
export async function getStaticProps({ params }) {
  const { source, frontMatter } = await getFileBySlug(params.slug, "data/projects");
  return {
    props: { source, frontMatter },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles("data/projects");
  //@ts-ignore
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export default Project;
