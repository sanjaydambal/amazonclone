import './App.css';
import Checkout from './Components/Checkout/Checkout';
 import NavBar from './Components/Navbar/Navigation';
   import MainPage from './Components/HomePage/MainPage';
import DisplayPage from './Components/DisplayPage/DisplayPage';
import PlaceOrder from './Components/PlaceOrder/Placeorder';
import { BrowserRouter as Router, Route,Routes,Link} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
          
             <NavBar />
              <Routes>  
              <Route path="" element= {<MainPage />}>
                    
                    </Route>          
                <Route path="/display" element = { <DisplayPage />}>
                   
                </Route>
                <Route path="/order/:id" element = { <PlaceOrder />}>
                 
                </Route>
                <Route path="/checkout" element = { <Checkout />}>
                 
                </Route>
               
              </Routes>
           
      </div>
    </Router>
  );
}




export default App;
