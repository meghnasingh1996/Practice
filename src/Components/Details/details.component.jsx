import React from 'react';
import './details.styles.scss';

// Importing link from react-router
import  {Link} from 'react-router-dom';

//Importing social media component
import SocialFollow from '../../Common/SocialFollow/socialfollow.component';

// Importing images from assets
import AngularLogo from '../../assets/angular-i.png';


// import ReactLogo from '../../assets/react_icon.png';
import BootStrapLogo from '../../assets/bootstrap.png';
import cssLogo from '../../assets/css.png';
import DrupalLogo from '../../assets/drupal.png';
import HtmlLogo from '../../assets/html.png';
import JavaLogo from '../../assets/java.png';
import JoomlaLogo from '../../assets/joomla.png';
import NodeLogo from '../../assets/node.png';
import WordPressLogo from '../../assets/wordpress.png';

const Details = () => {
    return(
        <div className="outerClass">
            <div className="innerClass1">
                <div className="Home">
                    <Link className="option" to=''>HOME</Link><br />
                    <Link className="option" to=''>ABOUT US</Link><br/>
                    <Link className="option" to=''>OUR WORK</Link><br/>
                    <Link className="option" to=''>FAQ'S</Link><br/>
                    <Link className="option" to=''>HOW WE WORK</Link>
                </div>
                <div className="Services" >
                    <h3>Services</h3>
                    <div className="service-container">
                        <div className='line1'>
                            <Link>Web Design</Link>
                            <Link>Web Development</Link>
                            <Link>Digital Marketing</Link>
                            <Link>Graphic Design</Link>
                            <Link>IT Services</Link>
                        </div>
                        <div className="line2">
                            <Link>Mobile Apps</Link>
                            <Link>White Label Solutions</Link>
                            <Link>Outsourcing</Link>
                            <Link>Printing</Link>
                            <Link>Consultation</Link>
                        </div>
                    </div>
                </div>
                <div className="innermostClass">
                    <div className="contact">
                        <h3>CONTACT US</h3>
                        <p>Address: Suite 6, 17 Comalco Ct Thomastown, 3074</p>
                        <p>Telephone:03 8595 5246</p>
                        <p>Email:info@logicsofts.com.au</p>                     
                    </div>
                    <div className="socialMedia">
                        <h3>STAY WITH US</h3>
                        <SocialFollow/>
                    </div>
                </div>
            </div>
            <div className="innerClass2">
                <h3>TECHNOLOGY USED</h3>
                <div className="row1-logo">
                    <img alt='' src={DrupalLogo} />
                    <img alt='' src={WordPressLogo} />
                    <img alt='' src={JoomlaLogo} />
                    <img alt='' src={JavaLogo}/>
                    <img alt='' src={AngularLogo}/>
                    <img alt='' src={HtmlLogo}/>
                    <img alt='' src={cssLogo}/>
                    <img alt='' src={BootStrapLogo}/>
                </div>
                <div className="row2-logo">
                    <img alt='' src={NodeLogo}/>
                </div>
            </div>
        </div>
    )
}

export default Details;