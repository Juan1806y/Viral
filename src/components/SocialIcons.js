import React from "react"
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.facebook.com/groups/viralufps/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a href="https://twitter.com/Viralufps" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a href="https://www.youtube.com/channel/UCvVdn8_yfQgCvCCrFfce83A" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      <a href="https://www.instagram.com/viralufps/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    </div>
  )
}

export default SocialLinks
