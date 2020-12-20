import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Parts from './COMPONENTS/COMP.view.parts';
import Users from './COMPONENTS/COMP.view.users';
import Profile from './COMPONENTS/COMP.profile';
import SocialNetwork from './COMPONENTS/COMP.view.socialNetwork';
import profileImg from './images/profile.png';
import socialNetworkImg from './images/socialnetwork.png';

const App = () => {


  
  setTimeout(() => {
    var animationTitle = document.getElementById('animation-title');
    if (animationTitle) {
      animationTitle.remove();
    }
    document.querySelector('.app-container').style.display = "grid";
    setTimeout(() => {
      document.querySelector('.app-container').classList.add('show');
    }, 10);
    clearTimeout();
  }, 4000);

  var isNavMenuOpen = false;
  const showhide = () => {
    console.log(document.querySelector('.navbar-links') )
    if (!isNavMenuOpen) {
      document.querySelector('.navbar-links').classList.add('open')
      document.querySelector('.hamburgerMenu').textContent = 'X';
      isNavMenuOpen = true;
    }
    else {
      document.querySelector('.navbar-links.open').classList.remove('open');
      document.querySelector('.hamburgerMenu').textContent = '☰';
      isNavMenuOpen = false;
    }
  }
  
  return (
    <BrowserRouter>
    <div className="App">
      <div className='app-container'>
        <header className='header'>
          <div className='navbar'>
            <Link to='/'><div className='link-group'><h1>Robert Shields</h1></div></Link>
            <h1 className="hamburgerMenu" onClick={showhide}>☰</h1>
            <div className='navbar-links'>
              <Link to='/profile'><div className='link-group'><img src={profileImg} alt='profile'/><h2>Profile</h2></div></Link>
              <Link to='/socialnetwork'><div className='link-group'><img src={socialNetworkImg} alt='social network'/><h2>Social Network</h2></div></Link>
            </div>
          </div>
        </header>
        <div className="main">
          <Route path='/' exact={true} />
          <Route path='/profile' component={Profile} />
          <Route path='/socialnetwork' component={SocialNetwork} />
          <Route path='/parts' component={Parts} />
          <Route path='/users' component={Users} />
        </div>
        <footer className='footer'>
          <h5>Copyright © 2020 Robert Shields. All rights reserved.</h5>
        </footer>
      </div>
      <h1 id='animation-title'>RS</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
