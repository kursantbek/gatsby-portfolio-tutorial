import React from 'react'
import setupInfo from '../utils/jobInfo'
import { Link } from 'gatsby'
// import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"

const JobDesc = ({jobs}) => {
    const newTags=setupInfo(jobs)
  return (
    <>
        {newTags.map((tag,index)=>{
          const [text]=tag
          return <p key={index}>{text}</p>
        })}
  </>
  )
}

export default JobDesc