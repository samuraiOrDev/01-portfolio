import { MainLayout, ProjectTitle, CardProject } from "@/components"
import { frontMatterProject } from "@/data/config"
import { NextPage } from "next"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
import { getAllFilesMetaData } from "../../../lib/mdx"
interface TypeProps {
  id: number
  title: string
  img: string
  slug: string
  description: string
  toGitHub: string
  toProject: string
  hasArticle: boolean
}
interface Props {
  projects: TypeProps[]
}
const Projects: NextPage<Props> = ({ projects }) => {
  return (
    <MainLayout
      title={frontMatterProject.title}
      description={frontMatterProject.description}
      font={inter.className}
    >
      <div
        className="flex justify-center items-center flex-col sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12"
        id="projects"
      >
        <ProjectTitle />
        <div className="flex items-center justify-center xl:max-w-[1280px] w-full lg:flex-row  flex-col mx-auto gap-2 lg:gap-4 flex-wrap">
          {projects.map((post) => (
            <CardProject
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              img={post.img}
              to={`/projects/${post.slug}`}
              toGitHub={post.toGitHub}
              toProject={post.toProject}
              hasArticle={post.hasArticle}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const projects = await getAllFilesMetaData("data/projects")
  return {
    props: { projects },
  }
}

export default Projects
