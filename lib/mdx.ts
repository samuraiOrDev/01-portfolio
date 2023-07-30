import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

const root = process.cwd();
export const getFiles = (folder: string) => {
  return fs.readdirSync(path.join(root, folder));
};
export const getFileBySlug = async (slug: string, folder: string) => {
  const mdxSource = fs.readFileSync(
    path.join(root, folder, `${slug}.mdx`),
    "utf-8"
  );
  const { data, content } = await matter(mdxSource);
  const source = await serialize(content, {});
  return {
    source,
    frontMatter: {
      ...data,
      slug,
    },
  };
};

export const getAllFilesMetaData = (folder: string) => {
  const files = getFiles(folder);
  //@ts-ignore
  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, folder, postSlug),
      "utf-8"
    );
    const { data } = matter(mdxSource);
    //@ts-ignore
    return [{ ...data, slug: postSlug.replace(".mdx", " ") }, ...allPosts];
  }, []);
};
