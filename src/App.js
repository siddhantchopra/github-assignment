import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent'
import {Provider} from 'react-redux'
import { ConfigureStore } from './store/configureStore'

const store = ConfigureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="container mt-5">
      <MainComponent/>
      </div>
    </Provider>
  );
}

export default App;
