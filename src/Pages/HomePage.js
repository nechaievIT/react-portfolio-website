import React from 'react'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';



function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am {" "}
                    <span>Yurii Nechaiev.</span>
                </h1>
                <p className="h-sub-text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link >
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage
