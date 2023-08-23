import React from "react";
import { getFileBySlug, getFiles } from "../../../lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import { MainLayout } from "@/components";
import { Inter } from "next/font/google";
import MDXComponents from "@/components/MDXComponents";
import { AnimationControls, motion } from "framer-motion";
import { RefUseAnimate, useAnimate } from "@/hooks/useAnimate";
import { animateMainSection, animateMainSectionInitialState } from "@/data";
const inter = Inter({ subsets: ["latin"] });
//@ts-ignore
const Post = ({ source, frontMatter }) => {
  const [ref, controls] = useAnimate(
    animateMainSection,
    animateMainSectionInitialState
  );
  return (
    <MainLayout
      title={frontMatter.title + " | SamuraiOr.Dev"}
      description={frontMatter.description}
      font={inter.className}
    >
      <motion.div
        className="flex justify-center items-center flex-col sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 "
        animate={controls as AnimationControls}
        ref={ref as RefUseAnimate["ref"]}
        initial={animateMainSectionInitialState}
        id={`post-${frontMatter.id}`}
      >
        <div className="flex items-center xl:max-w-[768px] w-full lg:flex-row flex-col mx-auto gap-2 flex-wrap">
          <div className=" md:p-10 text-start">
            <MDXRemote {...source} components={MDXComponents} />
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
};
//@ts-ignore
export async function getStaticProps({ params }) {
  const { source, frontMatter } = await getFileBySlug(params.slug, "data/blog");
  return {
    props: { source, frontMatter },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles("data/blog");
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
export default Post;
