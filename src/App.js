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
import ProductDetail from './components/ProductDetail/ProductDetail'
import CategoryDetail from './components/CategoryDetail/CategoryDetail'
import { useEffect } from 'react';
import {StoreContext} from './store/use-context'
import SearchResults from './containers/SearchResults';


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
  },[storeCtx.isSigned])

  useEffect(()=>{
    storeCtx.fetchOrders()
  },[storeCtx.userDetails])

  let userRoutes = (
    <>
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
        <Route path='/product/:productId'>
          <ProductDetail/>
        </Route>
        <Route path='/category/:categoryId'>
          <CategoryDetail/>
        </Route>
        <Route path="/search/:searchKey">
          <SearchResults/>
        </Route>
        <Route path='/*' exact>
          <Redirect to='/'/>
        </Route>
    </>
  )
  let authRoutes = (
    <>
      <Route path='/*' exact>
        <Redirect to='/signin'/>
      </Route>
      <Route path='/signin'>
        <SignIn/>
      </Route>
      <Route path='/signup'>
        <SignUp/>
      </Route>
    </>
  )
  return (
    <div className="App">
      <BrowserRouter>
            {storeCtx.isSigned?<Header/>:null}
            <Switch>
              {storeCtx.isSigned? userRoutes:authRoutes}
            </Switch>
      </BrowserRouter>
    </div> 
  );
}

export default App;
