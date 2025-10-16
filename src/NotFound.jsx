import './App.css'
import catGif from './assets/images/cat.gif'

const NotFoundPage = () => (
  <>
    <title>404 - Rovic Aliman</title>
    <div className='h-screen flex flex-col justify-center items-center gap-2 p-3'>
      <img src={catGif} width="100px" draggable='false' />
      <span className='text-base text-center'>Sorry... The page you're trying to access is not available.</span>
      <span className='mt-3 text-xs text-gray-500 text-center'>&copy; <a href="/">Rovic Aliman</a> 2025</span>
    </div>
  </>
)

export default NotFoundPage;