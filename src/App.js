
import './App.css';
import Header from './conponents/Header';
import Products from './conponents/Products';
import Slider from './conponents/Slider';
import TopMenu from './conponents/TopMenu';
import StarRating from './conponents/star';
import Event from './conponents/Event';
import Footer from './conponents/Footer';
import NavigationMenu from './conponents/NavigationMenu';



function App() {
  return (
    <div className="App">
      <TopMenu />
      <div className='Header-app'>
        <Header />
        <NavigationMenu />
      </div>

      <Slider />
      <Products />
      <Event />
      <Footer />
    </div>
  );
}

export default App;
