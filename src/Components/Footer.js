import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
<footer>
      <nav>
        <div class="nav-links-container">
        <ul class="nav-links">
                        <li><Link to="/AboutUs">About</Link></li>
                        <li><Link to="/Experience">Experience</Link></li>
                        <li><Link to="/Projects">Projects</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
        </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 Aashima Mahajan. All Rights Reserved.</p>
    </footer>
    </div>
  )
}

export default Footer
