import catGif from '../../assets/images/cat.gif'
import catLightGif from '../../assets/images/cat-light.gif'

import './NotFound.module.css';

const year = new Date().getFullYear();

const NotFoundPage = () => (
  <>
    <title>404 - Rovic Aliman</title>
    <div className='h-screen flex flex-col justify-center items-center gap-2 p-3'>
      <picture>
        <source srcSet={catLightGif} media="(prefers-color-scheme: dark)" />
        <img src={catGif} width="100px" draggable='false' />
      </picture>
      <span className='text-base text-center dark:text-gray-200'>Sorry... The page you're trying to access is not available.</span>
      <span className='mt-3 text-xs text-gray-500 dark:text-gray-400 text-center'>&copy; <a className='dark:text-gray-400' href="/">Rovic Aliman</a> {year}</span>
    </div>
  </>
)

export default NotFoundPage;