import React,{useContext} from 'react'
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainPage from './containers/MainPage';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp'
import Checkout from './containers/Checkout'
import Orders from './containers/Orders';
import WishList from './containers/Wishlists';
import Profile from './containers/Profile';
import { useEffect } from 'react';
import {StoreContext} from './store/use-context'
function App() {
  const storeCtx = useContext(StoreContext)
  useEffect(()=>{
    const getData = async()=>{
       const response = await fetch('https://e-commerce-597b0-default-rtdb.firebaseio.com/store.json')
       const data = await response.json()
       storeCtx.setItems(data)
       if(localStorage.getItem('userId')!==null){
         storeCtx.getUserData(localStorage.getItem('userId'))
       }
    }
    getData()
    storeCtx.checkStatus()
    storeCtx.fetchOrders()
  },[storeCtx.isSigned])

  let userRoutes = (
    <div>
        <Route path='/' exact>
          <MainPage/>
        </Route>
        <Route path='/profile'>
          <Profile/>
        </Route>
        <Route path='/checkout'>
          <Checkout/>
        </Route>
        <Route path='/wishlist'>
          <WishList/>
        </Route>
        <Route path='/orders'>
          <Orders/>
        </Route>
    </div>
  )
  let authRoutes = (
    <div>
      <Route path='/'>
        <Redirect to='/signin'/>
      </Route>
      <Route path='/signin'>
        <SignIn/>
      </Route>
      <Route path='/signup'>
        <SignUp/>
      </Route>
    </div>
  )
  return (
    <div className="App">
      <BrowserRouter>
            {storeCtx.isSigned?<Header/>:null}
            <Switch>
              {storeCtx.isSigned? userRoutes:authRoutes}
              <Route path='/*'>
                <Redirect to='/'/>
              </Route>
            </Switch>
      </BrowserRouter>
    </div> 
  );
}

export default App;
