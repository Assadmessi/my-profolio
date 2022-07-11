import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className='grid grid-cols-2 my-1'>
      <div className='mx-3'>
        <Header/>
      </div>
      <div>
        <Navigation/>
      </div>
    </div>
  );
}

export default App;
