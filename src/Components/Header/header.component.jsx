import React from 'react';
import './header.styles.scss';

// Importing link from react-router
import  {Link} from 'react-router-dom';

// Importing Components that are used in header
import CustomButton from '../../Common/CustomButton/custom-button.component';

//Importing logo from assets
import  Logo  from '../../assets/blog-logo.png';

const Header = () => {
    return (
        <div className="app-header">
        <img alt='' src={Logo} />
        <Link className='option' to='/'>Blogging Tools</Link>
        <Link className='option' to=''>Google</Link>
        <Link className='option' to=''>Internet Marketing</Link>
        <Link className='option' to=''>Our Services</Link>
        <Link className='option' to=''>Advertise With Us</Link>
        <CustomButton type="submit" className="requestButton" >
                    Request a free quote</CustomButton>
        <CustomButton type="submit" className="contactButton" >
                    Contact Us</CustomButton>
        </div>
    )
}

export default Header;