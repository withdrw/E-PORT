import React from 'react';
function Footer() {









  
  return (
    <div className= ' flex text-[white]  items-center justify-center text-center w-[100%] bg-black mt-10 '>
        <footer className='text-[16px] w-[100%]'>

    <div className='text-[32px] mt-16'>

            This website was created by Faiz using React JS.
    </div>

<div className='mt-12 mb-3 flex flex-col items-center'>


  <div >
            <a className='mx-10 hover:underline transition-all mb-10 font-semibold cursor-pointer ' href="https://github.com/withdrw">Github</a>
            <button className='mx-10 hover:underline transition-all mb-10 font-semibold cursor-pointer ' href="/">Contact</button>
  </div>
            <a className='flex w-5 mx-4 justify-center  hover:underline transition-all mb-4 font-semibold cursor-pointer ' href="https://www.linkedin.com/in/syed-zaidi-052173247/"> <svg className='w-5 bg-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>  </a>
</div>

        
        </footer>
    </div>
  )
}

export default Footer