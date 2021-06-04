import React from 'react'

import avatar from '../../assets/img/avatar.svg'
import dashboard from '../../assets/img/dashboard.svg'
import users from '../../assets/img/users.svg'
import cart from '../../assets/img/cart.svg'
import unlock from '../../assets/img/unlock.svg'
import typography from '../../assets/img/typography.svg'
import gallery from '../../assets/img/gallery.svg'


import './navbar.scss'
interface Props {
    
}

const Navbar: React.FC<Props> = () => {
    return (
        <div className='navbar'>
            <div className='navbar__top'>
                <img src={avatar} className='navbar__avatar' alt="avatar" />
                <p className='navbar__name'>Roman Kutepov</p>
                <p className='navbar__position'>Brain Director</p>
            </div>
            <div className='navbar__mid'>
            <ul className='navbar__list'>
                <li className='navbar__item'><img src={dashboard} alt="dashboard" /> <span className='navbar__title'> Dashboard</span></li>
                <li className='navbar__item'> <img src={users} alt="users" /> <span className='navbar__title'> Users</span></li>
                <li className='navbar__item'> <img src={cart} alt="cart"/> <span className='navbar__title'> Products</span></li>
                <li className='navbar__item'><img src={unlock} alt="unlock" /> <span className='navbar__title'> Authentication</span></li>
                <li className='navbar__item'> <img src={typography} alt="typography" />  <span className='navbar__title'>Typography</span></li>
                <li className='navbar__item'> <img src={gallery} alt="gallery" /> <span className='navbar__title'> Icons & Images</span></li>
                <li className='navbar__item'> <img src={gallery} alt="gallery" /> <span className='navbar__title'> Support</span></li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar
