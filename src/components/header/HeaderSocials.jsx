import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FiFacebook , FiInstagram} from 'react-icons/fi'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.instagram.com/rave.rae_/" target="_blank" rel="noopener noreferrer"><FiInstagram/></a>
            <a href="http://github.com" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
            <a href="https://www.facebook.com/profile.php?id=100005166690839" target="_blank" rel="noopener noreferrer"><FiFacebook/></a>
        </div>
    )
}

export default HeaderSocials