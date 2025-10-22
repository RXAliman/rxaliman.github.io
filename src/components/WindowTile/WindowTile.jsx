import styles from './WindowTile.module.css';

import { FaCircle } from 'react-icons/fa';

const WindowTile = ({ children, title, className, dataAos, dataAosDuration }) => {
  return (
    <div className='flex flex-col border-1 border-neutral-600 rounded-lg h-full' data-aos={dataAos} data-aos-duration={dataAosDuration}>
      <div className='flex shrink-0 items-center bg-neutral-700 px-3 py-2 rounded-t-lg border-b-2 border-neutral-900'>
        <div className='flex gap-1.5 text-xs'>
          <FaCircle className='text-red-400' />
          <FaCircle className='text-yellow-400' />
          <FaCircle className='text-green-500' />
        </div>
        {title && <div className='w-full text-center text-neutral-300'>{title}</div>}
      </div>
      <div className={className + ' grow-1 bg-neutral-800 text-white rounded-b-lg'}>
        {children}
      </div>
    </div>
  );
}

export default WindowTile;