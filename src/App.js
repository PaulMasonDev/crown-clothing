import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils'; // Import User Authentication. We want to store the authentication in App.js so that we can pass it to any component that needs it.

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount () {
    // Opens a constant connection of the user to the session as long as the application is running.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState( {currentUser: user });

      console.log(user)
    });
  }

  componentWillUnmount() {
    // Closes subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>  
          <Route path='/shop' component={ShopPage}/>     
          <Route path='/signin' component={SignInAndSignUp}/>     
        </Switch>
      </div>
    );
  }
}

export default App;
