import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Login from './screens/Login'
import SignUp from './screens/SignUp'

// import firebase from "firebase";

const App = () => {
  // returned output must be in single element. aditional div / etc will not work
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/login' component={Login}/>
          <Route path='/SignUp' component={SignUp}/>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
