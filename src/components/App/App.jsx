import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import Header from '../Header/Header';
import CharacterList from '../../container/CharacterList/CharacterList';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/:page?" component={CharacterList} />
        {/* <Route exact path="/detail/:id?" component={Charac} /> */}
      </Switch>
    </Router>
  );
}
