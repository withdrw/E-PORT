import React from 'react'

function Footer() {









  
  return (
    <div className= ' flex text-[white]  items-center justify-center text-center w-[100%] bg-black mt-10 '>
        <footer className='text-[16px] w-[100%]'>

    <div className='text-[32px] mt-16'>

            This website was created by Faiz using React JS.
    </div>

<div className='mt-12 mb-10'>

            <a className='mx-10 hover:underline transition-all mb-10 font-semibold cursor-pointer ' href="https://github.com/withdrw">Github</a>
            <button className='mx-10 hover:underline transition-all mb-10 font-semibold cursor-pointer ' href="/">Contact</button>
            <a className='mx-10 hover:underline transition-all mb-10 font-semibold cursor-pointer ' href="/">About</a>
</div>

        
        </footer>
    </div>
  )
}

export default Footer