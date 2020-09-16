import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import store from './store';
import { Route, BrowserRouter  as Router ,Switch  } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
         <Switch>
          <Route exact path='/' component={Posts} />
           </Switch>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
