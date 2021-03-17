import './App.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/'>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
