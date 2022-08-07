import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import SEO from "../components/Seo"
import Layout from './../components/Layout';
import Blogs from "../components/Blogs"
const IndexPage = ({data}) => {
  const {
    allContentfulProject:{nodes:projects},
    allContentfulBlog:{nodes:blogs}
  }=data

  return (
   <Layout>
    <SEO title="Home" description="this is a home page Kursantbek"/>
    <Hero />
    <Services/>
    <Jobs/>
    <Projects projects={projects} title="featured projects" showLink/>
    <Blogs blogs={blogs} title="latest articles" showLink/>
   </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProject(filter: {featured: {eq: true}}) {
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
    allContentfulBlog(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        id
        title
        image {
          gatsbyImageData
        }
        tag {
          tag
        }
        date(formatString: "DD-MM-YYYY")
        description
        content {
          raw
        }
      }
    }
  }
`

export default IndexPage
