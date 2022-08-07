import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Kursantbek</h1>
            <h4>Freelance web junior Front-End Developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks/>
          </div>
        </article>
        <StaticImage 
         src='../assets/images/hero.webp'
         alt="portfolio"
         className="hero-img"
         placeholder="blurred"
         />
      </div>
    </header>
  )
}

export default Hero
