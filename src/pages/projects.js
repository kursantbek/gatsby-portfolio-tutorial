import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
const ProjectsPage = ({
  data:{allContentfulProject:{nodes:projects}}
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title='all project'/>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProject {
      nodes {
        title
        description {
          description
        }
        id
        featured
        github
        url
        image {
          contentful_id
          gatsbyImageData
        }
        tags {
          tagsProject
          id
        }
      }
    }
  }
`

export default ProjectsPage
