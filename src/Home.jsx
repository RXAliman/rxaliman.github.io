import './index.css'
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const HomePage = () => (
  <>
    <title>Portfolio - Rovic Aliman</title>
    <main>
      <section className='h-svh bg-neutral-800 flex items-center max-sm:justify-center'>
        <div className='flex flex-col max-sm:items-center text-white ml-10 max-sm:ml-0'>
          <span className='text-6xl max-sm:text-4xl font-medium max-sm:text-center'>Hi, I'm RXAliman</span>
          <span className='text-2xl max-sm:text-lg font-light max-sm:text-center'>Aspiring Front-end Developer</span>
          <div className='mt-4 flex flex-col items-start gap-1'>
            <span className='font-light flex max-sm:justify-center gap-2'><FaFacebook className='text-xl' /><a href="https://facebook.com/rovicxavier" target='_blank'>/rovicxavier</a></span>
            <span className='font-light flex max-sm:justify-center gap-2'><FaLinkedin className='text-xl' /><a href="https://linkedin.com/in/rovic-xavier-aliman-2887ba312/" target='_blank'>Rovic Xavier Aliman</a></span>
            <span className='font-light flex max-sm:justify-center gap-2'><FaGithub className='text-xl' /><a href="https://github.com/RXAliman" target='_blank'>RXAliman</a></span>
          </div>
        </div>
      </section>
      <section className='h-screen'></section>
    </main>
  </>
);

export default HomePage;