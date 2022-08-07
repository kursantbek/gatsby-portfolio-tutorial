import React from 'react'
import {graphql, Link} from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'


const ContentfulTemplate = ({ data}) => {
  
  const {contDesc:{contDesc}}=data.contentfulBlog
 
  return (
    <Layout>
      <section className='blog-template' >
      <div className="section-center">
        <article className='blog-content'>
          <ReactMarkdown children={contDesc}/>
        </article>
        <Link to='/blog' className='btn center-btn'>blog</Link>
      </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query getSingleBlog($title: String) {
  contentfulBlog(title: {eq: $title}) {
    title
    contDesc {
      contDesc
    }
    content{
      raw
    }
  }
}
`

export default ContentfulTemplate