import React from 'react';
import './consultation.styles.scss';

import CustomButton from '../../Common/CustomButton/custom-button.component';
import Form from '../../Common/Form/form.component';

const Consultation = () => {
    return (
        <div className="outerClassContainer">
            <div className="innerClass1">
                <h1>Get in touch/ also</h1>
                <h1>schedule a call/ meet</h1>
                <div className="paragraph">
                <div className="row1">
                    <h3>Schedule a call or meeting</h3><p>with our digital marketing expert</p>
                </div>
                <div className="row2">
                    <p>for</p><h3>FREE consultation.</h3>
                </div>
                <CustomButton type="submit" className="consultationButton" >
                    Schedule Consultation </CustomButton>
                </div>
            </div>
            <div className="innerClass2">
            <Form />
            </div>
        </div>
    )
}

export default Consultation;