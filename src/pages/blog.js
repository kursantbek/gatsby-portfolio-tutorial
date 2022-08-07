import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Blogs from '../components/Blogs';

const Blog = ({
  data:{
    allContentfulBlog:{nodes:blogs},
  },
}) => {
 
  return (
    <Layout>
      <section className='blog-page'>
        <Blogs blogs={blogs} title='blog'/>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBlog {
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
export default Blog