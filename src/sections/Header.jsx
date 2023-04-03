function Header() {
  return (
    <div>
    <nav className='flex bg-[#ffffff00] text-[black] h-20 max-w-20 justify-between'>
        <div className=' flex w-[20%] items-center' >
            <h1 className='font-bold pl-5 text-black text-xl '>
        <img className="w-16" src="https://cdn.discordapp.com/attachments/942157875323748363/1092546128106487979/syed-zaidi-logo.png" alt="" />
            </h1>
        </div>
        <div className='flex items-center font-bold mr-6 '>
            <a  href="/" className='mx-5 h-10 ml-16 cursor-pointer '>Home</a>
            <a  href="/" className='mx-5 h-10 ml-16 cursor-pointer '>About </a>
            <a  href="/" className='mx-5 h-10 ml-16 cursor-pointer '>Projects </a>
            <a  href="/" className='mx-5 h-10 ml-16 cursor-pointer '>Contact </a>
            
        </div>
    </nav>
</div>
  )
}

export default Header