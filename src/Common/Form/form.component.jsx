import React from 'react';
import './form.styles.scss';


// Importing custom button
import CustomButton from '../CustomButton/custom-button.component';

const Form = () => {
    return(
        <div className="FormContainer">
            <h2 style={{color:"#be2664"}}>If you want us to prepare a digital marketing scope for </h2>
            <div className="text"><h2 style={{color:"#be2664"}}>your business, </h2><p>please fill in the necessary information </p></div>
            <p>required for us to proceed.</p>
            <form className="formClass"> 
                <div className="row1">
                    <label>Full Name:
                        <input type="text" />
                    </label>
                    <label>Email:
                        <input type="email" />
                    </label>
                </div>
                <div className="row2">
                    <label>Phone:
                        <input type="text"/>
                    </label>
                    <label>Service Category:
                        <select >
                            <option selected>Select</option>
                            <option value="webDesign">Web Design</option>
                            <option value="webDevelopment">Web Development</option>
                            <option value="digitalMarketing">Digital Marketing</option>
                            <option value="marketDesign">Market Design</option>
                            <option value="itServices">IT Services</option>
                            <option value="mobileApps">Mobile Apps</option>
                            <option value="printing">Printing</option>
                            <option value="consultation">Consultation</option>
                        </select>
                    </label>
                </div>
                <div className="row3">
                    <label>Date:
                        <input type="text" />
                    </label>
                    <label>Time:
                        <select>
                            <option value='morning'>Morning</option>
                            <option value='noon'>Noon</option>
                            <option value='evening'>Evening</option>
                        </select>
                    </label>
                </div>
                <CustomButton type="submit" className="formButton">
                    Submit
                </CustomButton>
            </form>
        </div>
    )
}

export default Form;