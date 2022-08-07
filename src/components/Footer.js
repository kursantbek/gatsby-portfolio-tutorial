import React from "react"
import SocialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"/>
        <h4>copiright&copy; {new Date().getFullYear()} 
        <span> WebDev</span> all rights reserved
        </h4>

      </div>
    </footer>
  )
}

export default Footer
