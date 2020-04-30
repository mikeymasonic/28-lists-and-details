import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../Header/Header';
import CharacterList from '../../container/CharacterList/CharacterList';
import CharacterDetail from '../../container/CharacterDetail/CharacterDetail';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/:page?" component={CharacterList} />
        <Route exact path="/detail/:name?" component={CharacterDetail} />
      </Switch>
    </Router>
  );
}
