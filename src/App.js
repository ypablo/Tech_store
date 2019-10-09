import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'

import Home from './pages/HomePage'
import About from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import Contact from './pages/ContactPage'
import SingleProduct from './pages/SingleProductPage'
import Default from './pages/Default'
import Cart from './pages/CartPage'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import SideCart from './components/SideCart'



class App extends Component {
  render() {
    return (
      <div>
        {/*navbar, sidebar, cart, footer*/}
        <Navbar />
        <Sidebar />
        <SideCart />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" exact component={ProductsPage} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </div>
    )
  }
}


export default App;
