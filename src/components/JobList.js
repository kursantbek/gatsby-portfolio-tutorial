import React,{useState} from 'react'

const JobList = ({jobs}) => {

    const [value,setValue]=useState(0)
  return (
  
    <div className="btn-container">
        {jobs.map((item,index)=>{
            // const {contentful_id,company}=item
          return (
            <button 
            key={item.contentful_id} 
            onClick={()=>setValue(index)}
            className={`job-btn ${index===value && 'active-btn'}`}
            >{item.company}</button>
          )
        })}
      </div>
    
  )
}

export default JobList