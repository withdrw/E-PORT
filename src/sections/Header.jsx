
function Header() {
  return (
    <div>
    <nav className='flex bg-[#ffffff00] text-[black] h-20 justify-between '>
        <div className=' flex w-[20%] items-center' >
            <h1 className='font-bold pl-5 text-black text-xl '>
        Faiz.dev
            </h1>
        </div>
        <div className='flex items-center font-bold '>
            <a  href="/" className='mx-5 h-10 px-5 cursor-pointer rounded-lg  '>Home</a>
            <a  href="/" className='mx-5 h-10 px-5 cursor-pointer rounded-lg '>About </a>
            <a  href="/" className='mx-5 h-10 px-5 cursor-pointer rounded-lg '>Projects </a>
            <a  href="/" className='mx-5 h-10 px-5 cursor-pointer rounded-lg '>Contact </a>
            
        </div>
    </nav>
</div>
  )
}

export default Header