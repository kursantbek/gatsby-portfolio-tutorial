import { Link } from 'gatsby'
import React from 'react'
import Blog from './Blog'
import Title from './Title'

const Blogs = ({blogs,title,showLink}) => {
  return (
    <section className="section">
        <Title title={title}/>
        <div className="section-center blogs-center">
            {blogs.map((blog)=>{
                return(
                    <Blog key={blog.id} {...blog}/>
                )
            })}
        </div>
        {showLink && <Link to='/blog/' className='btn center-btn'>blog</Link>}
    </section>
  )
}

export default Blogs