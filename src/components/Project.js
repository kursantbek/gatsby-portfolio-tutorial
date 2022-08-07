import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({title,description:{description},tags:{tagsProject},github,url,image,index,tags:{id}}) => {
//  const images=image(getImage(gatsbyImageData))
const pathToImage=getImage(image)
  return (
    <article className="project">    
      <GatsbyImage 
      image={pathToImage} 
      className="project-img" 
      alt={title}
      />
      <div className="project-info">
        <span className="project-number">0{index+1}</span>
        <h3>{title}</h3>
        <p className="project-desc">
          {description}
        </p>
        <div className="project-stack">
          {tagsProject.map((item,index)=>{
            return (
              <span key={index+1}>{item}</span>
            )
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon"/>
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon"/>
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
