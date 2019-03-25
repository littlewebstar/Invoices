import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Customers from './components/customers';
import { BrowserRouter, Route } from 'react-router-dom'
import Invoices from './components/invoices/Invoices';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <BrowserRouter>
          <Navbar />
          <Route path="/customers" exact component={Customers} />
          <Route path="/invoices" exact component={Invoices} />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
