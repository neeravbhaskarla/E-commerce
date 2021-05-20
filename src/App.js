import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainPage from './containers/MainPage';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp'
import Checkout from './containers/Checkout'
import Orders from './containers/Orders';
import WishList from './containers/Wishlists';
import Profile from './containers/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Header/>
            <Switch>
              <Route path='/' exact>
                <MainPage/>
              </Route>
              <Route path='/signin'>
                <SignIn/>
              </Route>
              <Route path='/signup'>
                <SignUp/>
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
            </Switch>
      </BrowserRouter>
    </div> 
  );
}

export default App;
