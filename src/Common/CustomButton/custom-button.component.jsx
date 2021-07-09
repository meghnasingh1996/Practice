/* This is a customized button component in order to increase the re-usability of code.
   We does this because button is used in more than one place so we need not to write the code again.
*/


import React from 'react';
import './custom-button.styles.scss';

// creating a function component 
const CustomButton = ({children , ...otherProps}) => (
    <button className='button' {...otherProps} >
         {children} 
    </button>
 );
 
 // export is necessary in order to made this function available for use by other components
 export default CustomButton;