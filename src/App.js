import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pages from "./pages/Pages"
import Category from "./components/Category"
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Hero/>
      <Search/>
      <Category/>
      <Pages/>
      <Footer/>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
