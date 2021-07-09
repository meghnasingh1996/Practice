import React from 'react';
import './marketing.styles.scss';

//Importing custom button
import CustomButton from '../../Common/CustomButton/custom-button.component';


// Class Component to handle state of form
class Market extends React.Component{
    constructor(){
        super();
        this.state={
            email: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:''});
    }
    render(){
        return(
            <div className="market-container">
            <div className="heading">
                <h1>Smart marketing </h1>
                  <h1>starts here</h1>  
            </div>
            <div className="paragraph">
                <p>Join over 150,000 marketing managers who get our best digital marketing insights, </p>
                <p>strategies and tips delivered straight to their inbox.</p>
            </div>
            <div className='form'>
            <form onSubmit={this.handleSubmit}>
            <input name='email' 
                type='email' 
                placeholder='ENTER YOUR WORK MAIL'
                required /> 
            <CustomButton type='submit'  className="subscribeButton" >
                Subscribe
            </CustomButton>   
            </form>
            </div>
        </div>

        )
    }
}

export default Market;

