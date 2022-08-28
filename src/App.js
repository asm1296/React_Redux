import React from 'react';
import logo from './logo.svg';
import './App.css';
import BankKiosk from './Components/BankKiosk'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import AccountHolderDetails from './Components/AccountHolderDetails'
import { Provider } from 'react-redux'
import { bankStore } from './Redux/BankStore'
import { BrowserRouter,Switch,Route,Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Provider store={bankStore}>
         
          <div className="App">
          <NavBar></NavBar>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/bankAccount' component={BankKiosk} />
          <Route path='/accountHolder' component={AccountHolderDetails} />
          </Switch>
          </div>
                  
        </Provider>
    </BrowserRouter> 
    );
}

export default App;
