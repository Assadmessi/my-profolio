import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Home from './Views/Home';

function App() {
  return (
    <div className='bg-web h-screen bg-no-repeat bg-cover'>
      <div className='grid grid-cols-2 bg-royal-blue h-9 fixed drop-shadow-3xl w-screen text-white'>
        <div className='mx-3 py-1'>
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
