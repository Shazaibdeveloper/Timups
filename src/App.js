import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/css/style.css'
import '../src/css/style.css.map'
import '../src/css/bootstrap.css'
import '../src/css/responsive.css'
import '../src/css/custom.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Watches from './pages/Watches';
import About from './pages/About';
import Error from './pages/Error';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './Store/store';  
import ProductList from './components/ProductList';
import Details from './components/Details';
import FilterButtons from './components/FilteredButtons';
import WatchList from './components/WatchList';
import shopapi from './Api/Watchesapi';
import Search from './pages/Search';

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
 
    <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/home" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/watches" element={<Watches />} />
  <Route path="/about" element={<About />} />
  <Route path="/details" element={<Details />} />
  <Route path="/details/:id" element={<Details />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/filterbutton" element={<FilterButtons />} />
  <Route path="/watchlist" element={<WatchList/>} />
  <Route path="/search" element={<Search />} />
  <Route path="*" element={<Error />} />
</Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
