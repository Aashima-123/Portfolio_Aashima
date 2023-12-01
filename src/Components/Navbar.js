import { Link } from "react-router-dom";

export default function Navbar() {
    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
    return (
        <div>
            <nav id="desktop-nav">
                <div class="logo">Aashima Mahajan</div>
                <div>
                    <ul class="nav-links">
                        <li><Link to="/AboutUs">About</Link></li>
                        <li><Link to="/Experience">Experience</Link></li>
                        <li><Link to="/Projects">Projects</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
            <nav id="hamburger-nav">
                <div class="logo">Aashima Mahajan</div>
                <div class="hamburger-menu">
                    <div class="hamburger-icon" onClick={()=>{toggleMenu()}}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="menu-links">
                        
                        <li><Link to="/AboutUs" onClick={()=>{toggleMenu()}}>About</Link></li>
                        <li><Link to="/Experience" onClick={()=>{toggleMenu()}}>Experience</Link></li>
                        <li><Link to="/Projects" onClick={()=>{toggleMenu()}}>Projects</Link></li>
                        <li><Link to="/Contact" onClick={()=>{toggleMenu()}}>Contact</Link></li>
                    </div>
                </div>
            </nav>
        </div>
    );
}