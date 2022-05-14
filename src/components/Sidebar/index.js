import './index.scss';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logoS from '../../assets/images/logo-s.png';
import logoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Sidebar() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logoS} alt="Logo" />
            <img src={logoSubtitle} alt="Logo" className='sub-logo'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d42" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/about" className="about-link">
                <FontAwesomeIcon icon={faUser} color="#4d4d42" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d42" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/jorge-barboza-14453617/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d42" />
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="https://github.com/jfbarboza">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d42" />
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UCjLNANmP5vPaTkancH4cF_w">
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d42" />
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="skype:live:jorge.barboza81">
                    <FontAwesomeIcon icon={faSkype} color="#4d4d42" />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar