import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Home from './Views/Home';

function App() {
  return (
    <div className='bg-web h-screen bg-no-repeat bg-cover'>
      <div className='grid grid-cols-2 bg-royal-green h-9 fixed drop-shadow-3xl w-screen text-white h-12 content-center z-10'>
        <div>
          <Header/>
        </div>
        <div className='py-1'>
          <Navigation/>
        </div>
      </div>
      <div>
        <Home/>
      </div>
    </div>
  );
}

export default App;
