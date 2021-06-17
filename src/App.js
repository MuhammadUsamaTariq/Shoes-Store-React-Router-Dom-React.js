import Grid from '@material-ui/core/Grid';

import Navbar from './components/Navbar';
import ShoesList from './components/ShoesList';
import ShoesDiscription from './components/ShoesDiscription';
import Footer from './components/Footer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './App.css';





function App() {
  return (
    <Router>
      
       <Navbar />
       
    
      
      <Switch>
        <Route exact path="/Shoes-Store-React-Router-Dom-React.js/">
        <ShoesList />
        </Route>
        <Route path="/Shoes-Store-React-Router-Dom-React.js/ShoesDiscription/:id" >
            <ShoesDiscription />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
