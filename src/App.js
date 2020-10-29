import React from 'react';
import { Navbar } from './components/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Alert } from './components/Alert';
import { Home } from './pages/Home';
import { AlertState } from './context/alert/alertState';
import { FoodListState } from './context/foodlists/foodListState';
import { FoodListDetails } from './pages/FoodListDetails';
import { FoodListDetailsState } from './context/foodlistdetails/foodListDetailsState';
import { Authorization } from './pages/Authorization';
import { AuthorizationState } from './context/authorization/authorizationState';

function App() {

  return (
    <AuthorizationState>
      <FoodListDetailsState>
        <FoodListState>
          <AlertState>
          <BrowserRouter>
            <Navbar />
            <div className="container pt-4">
              <Alert />
              <Switch>
                <Route path="/authorization" component={Authorization} />
                <Route path="/" exact component={Home} />
                <Route path="/foodlist/:name" component={FoodListDetails} />
              </Switch>
            </div>
          </BrowserRouter>
          </AlertState>
        </FoodListState>
      </FoodListDetailsState>
    </AuthorizationState>
  );
}

export default App;
