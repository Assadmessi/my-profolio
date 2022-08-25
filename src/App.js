import './App.css';
import Navigation from './Components/Navigation';
import Home from './Views/Home';
import Footer from './Components/footer';

function App() {
  return (
    <div className='w-full h-full overflow-hidden'>
      <div className='h-screen w-screen overflow-y-scroll pr-4 box-content bg-web bg-center bg-repeat bg-cover'>
          <Navigation/>
          <Home/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
