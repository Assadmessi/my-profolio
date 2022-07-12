import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className='bg-web h-screen bg-no-repeat bg-cover'>
      <div className='grid grid-cols-2 bg-royal-blue h-9 fixed drop-shadow-3xl w-screen text-white'>
        <div className='mx-3'>
          <Header/>
        </div>
        <div>
          <Navigation/>
        </div>
      </div>
    </div>
  );
}

export default App;
