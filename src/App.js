import React, { Component } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import LayoutComponent from './components/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<LayoutComponent />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
