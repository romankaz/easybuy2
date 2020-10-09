import React from 'react';
import { Navbar } from './components/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Alert } from './components/Alert';
import { Home } from './pages/Home';
import { AlertState } from './context/alert/alertState';
import { FoodListState } from './context/foodlists/foodListState';


function App() {
  return (
    <FoodListState>
      <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Alert />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
      </AlertState>
    </FoodListState>
  );
}

export default App;
