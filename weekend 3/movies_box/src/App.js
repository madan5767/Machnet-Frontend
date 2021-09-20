import React from 'react';
import { BrowserRouter, Router,  Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Action from './components/Genre/Action';
import Crime from './components/Genre/Crime';
import Drama from './components/Genre/Drama';
import Thriller from './components/Genre/Thriller';
import MovieDetails from './components/MovieDetails/MovieDetails';
import WatchList from './components/WatchList/WatchList';

function App() {
  return (
    <div className="App">        
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Action' component={Action}/>
          <Route exact path='/Crime' component={Crime}/>
          <Route exact path='/Drama' component={Drama}/>
          <Route exact path='/Thriller' component={Thriller}/>
          <Route exact path='/MovieDetails' component={MovieDetails}/>
          <Route exact path='/WatchList' component={WatchList}/>
        </Switch>
      <Footer/>   
      </BrowserRouter>
    </div>  
  );
}

export default App;
