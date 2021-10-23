import { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Tv_Show from './Components/Tv-Show/Tv_Show';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import { Route, Switch, Redirect } from 'react-router';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';

class App extends Component {
  render() {
    return <>
      <Navbar />

      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />

        <ProtectedRoutes path="/Home" component={Home} />
        <ProtectedRoutes path="/Movies" component={Movies} />
        <ProtectedRoutes path="/Tv_Show" component={Tv_Show} />
        <ProtectedRoutes path="/About" component={About} />
        <ProtectedRoutes path="/Contacts" component={Contacts} />

        <Redirect exact from="/" to="/Home" />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </>
  }
}

export default App;