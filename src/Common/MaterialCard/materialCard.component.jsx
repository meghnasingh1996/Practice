import React from 'react';
import './materialCard.styles.scss';

//Importing images from assets
import BlogImage from '../../assets/card1_image.png';
import Author from '../../assets/author.png';

// Importing custom made button
import CustomButton from '../CustomButton/custom-button.component';


// Functional component
const MaterialCard = () => {
    return(
        <div>
        <div className="CardClass">
            <div className="blogImageDiv">
                <img src={BlogImage} alt=""></img>
            </div>
            <div>
                <h2>Top Software Development</h2>
                <h2>Companies in London – </h2>
                <h2>Compare Quotes</h2> 
                <p className="para1">Kickstart the growth of your business with a professionally <br/>
                   designed website and software development services offered by <br/>
                   Logicsofts, one of the leading software development</p>
                   <div className="buttton-image">
                   <CustomButton type="submit"  className="customButtonClass">
                        Read More
                   </CustomButton>
                   <div className="image">
                        <img alt='' src={Author} style={{width:"80px" , height:"60px"}}/>
                        <div className="author">
                        <h4>Author :</h4>
                        <p>Sam Singh</p>
                        </div>          
                   </div>  
                   </div>
            </div>
            
        </div>
        </div>
    )
}

export default MaterialCard;