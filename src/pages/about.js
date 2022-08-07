import React from "react"
import { graphql } from "gatsby"
import {StaticImage} from 'gatsby-plugin-image'
import Title from "../components/Title"
import Seo from "../components/Seo"
import Layout from "../components/Layout"

const About = ({data:{about:{nodes}}}) => {
  const {title,info:{info},tags:{tag}}=nodes[0]
 
  return (
   <Layout>
     <section className="about-page">
      <div className="section-center about-center">
        <StaticImage
        src='../assets/images/hero.webp'
        alt="about me"
        className="about-img"
        />

        <article className="about-text">
          <Title title={title}/>
          <p>{info}</p>
          <div className="about-stack">
            {tag.map((item,id)=>{
              return <span key={id+1}>{item}</span>
              
            })}
          </div>
        </article>
      </div>
    </section>
   </Layout>
  )
}

export const query = graphql`
  {
    about:allContentfulAbout {
      nodes {
        title
        image {
          gatsbyImageData
        }
        info {
          info
        }
        tags {
          tag
        }
      }
    }
  }
`
export default About
