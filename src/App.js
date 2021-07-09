import React from 'react';

//Importing react router functionalities
import { Route, Switch } from 'react-router';


// Importing Components 
import Header from './Components/Header/header.component';
import Market from './Components/Marketing/marketing.component';
import Footer from './Components/Footer/footer.component';
import CardList from './Components/Card-List/card-list.component';
import Details from './Components/Details/details.component';
import Consultation from './Components/Consultation/consultation.component';


function App() {
  return (
        <div>
          <Switch>
            <Route exact path=''  />
            <Route exact path=''  />
          </Switch>
          <Header />
          <Market />
          <CardList />
          <Consultation />
          <Details />
          <hr style={{color:"#ecf2fa"}}/>
          <Footer />
        </div>
  );
}

export default App;
