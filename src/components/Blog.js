import { Link } from 'gatsby'
import {GatsbyImage,getImage} from 'gatsby-plugin-image'
import slugify from 'slugify'
import React from 'react'

const Blog = ({id,title,image,date,tag:{tag},description}) => {
    const blogImage=getImage(image)
    const slug=slugify(title,{lower:true})
  return (
    <Link to={`/${slug}`}  key={id} >
        <article className="blog">
            <GatsbyImage 
            image={blogImage}
            alt={title}
            className='blog-img'/>
            <div className="blog-card">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className="blog-footer">
              <p>{tag}</p>
              <p>{date}</p>
            </div>
        </article>
    </Link>
  ) 
}

export default Blog