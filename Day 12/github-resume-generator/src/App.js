import { Route,Switch } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { Resume } from './components/Resume/Resume';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/resume/:username' render={(props) => <Resume {...props}/>} />
      </Switch>
    </div>
  );
}

export default App;