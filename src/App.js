import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            <h1><a href="#" className="brand-logo">Bloc Jams</a></h1>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger hide-on-med-and-up"><ion-icon name="menu"></ion-icon></a>
            <ul id="nav-mobile" className="right hide-on-small-only">
              <li><Link to='/'>Landing</Link></li>
              <li><Link to='/library'>Library</Link></li>
            </ul>
          </div>
        </nav>
        
        <ul className="sidenav" id="mobile-demo">
          <li><Link to='/'>Landing</Link></li>
          <li><Link to='/library'>Library</Link></li>
        </ul>

        <main className="container">
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
