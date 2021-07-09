import React from 'react';
import './card.styles.scss';

// Importing images
import BlogImage from '../../assets/blog-image.png';
import Author from '../../assets/author.png';

// Importing custom button
import CustomButton from '../CustomButton/custom-button.component';

const Card = (props) =>{
    return (
        <div className="card-container">
            <img src={BlogImage} alt=""  />
            <h3> {props.item.title}</h3>
            <p>  {props.item.body}</p>
            <CustomButton  className="customButtonClass" type="submit" >
                Read More
            </CustomButton>
             <div className="AuthorClass">
                <img alt='' src={Author} style={{width:"80px" , height:"60px"}}/>
                <div className="authorDetails">
                    <h4>Author :</h4>
                    <p>Sam Singh</p>
                </div>
             </div>
         </div>
    );
}

export default Card;