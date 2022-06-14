
import React from 'react';
import './App.css';
import store from './Redux/store';
import BallContainer from './Components/BallContainer';
import BatContainer from './Components/BatContainer';
import UserContainer from './Components/UserContainer';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>

   <div className='App'>
    <BallContainer/>
    <BatContainer/>
    <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
