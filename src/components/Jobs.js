import React,{useState} from "react"
import Title from "./Title"
import { graphql,useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"

const query = graphql`
  {
    allContentfulJob(sort: {order: DESC, fields: contentful_id}) {
      nodes {
        contentful_id
        company
        date
        position
        content {
          id
          contentDesc
        }
      }
    }
  }
`

const Jobs = () => { 

  const [value,setValue]=useState(0)
const data=useStaticQuery(query)

const {
  allContentfulJob:{nodes:jobs},
}=data

const {
  contentful_id,
  company,
  position,
  date,
  content:{
    id,
    contentDesc
  }
}=jobs[value]

  return (
    <section className="section jobs">
      <Title title="expierence"/>
      <div className="jobs-center">
      {/* btn container */}
      <div className="btn-container">
        {jobs.map((item,index)=>{
            return(
              <button 
              key={item. contentful_id}
              className={`job-btn ${index===value && 'active-btn'} `}
              onClick={()=>setValue(index)}
              >{item.company}</button>
            )
        })}
      </div>
      {/* job info */}
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {contentDesc.map((item,id)=>{
          return(
            <div key={id} className='job-desc'>
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{item}</p>
            </div>
          )
        })}
      </article>
      
      </div>
      <Link to='/about' className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
