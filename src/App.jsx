import './App.css';
import catGif from './images/cat.gif';

const App = () => {
  return (
    <>
      <div className='center'>
        <img src={catGif} draggable='false' />
        Sorry... work in progress
        <span className='attribution'>&copy; Rovic Aliman 2025</span>
      </div>
    </>
  )
}

export default App
