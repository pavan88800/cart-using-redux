import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './componets/Header';
import Login from './componets/Login';
import About from './Pages/About';
import Card from './componets/Card';
import Cart from './Pages/Cart';
import {useSelector} from 'react-redux';

// protected route
function PrivateRoute({children}) {
  let auth = useSelector (state => state.auth.login);
  console.log ('app', auth);
  if (auth) {
    return children;
  } else {
    return <Redirect to="/login" />;
  }
}

function App () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Card} />;
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />;
        <PrivateRoute exact path="/cart" component={Cart} />;
      </Switch>
    </Router>
  );
}

export default App;
