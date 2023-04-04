import React from 'react'

function Footer() {
  return (
    <div className= ' flex text-[white] h-[100px] items-center justify-center '>
        <footer className='text-[16px]'>


            This website was created by Faiz using React JS.

            <a className='ml-8 font-semibold cursor-pointer ' href="https://github.com/withdrw">Github</a>
            <a className='ml-8 font-semibold cursor-pointer ' href="/">Contact</a>
            <a className='ml-8 font-semibold cursor-pointer ' href="/">About</a>

        <div className='border-b-3 border mt-2 '>
        </div>
        <div className=''>
            copyright 2023
        </div>
        
        </footer>
    </div>
  )
}

export default Footer