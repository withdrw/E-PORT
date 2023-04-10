import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Projects() {
  return (
    <div className='flex max-w-[100%] h-[80%] justify-center'>
        <div className='flex-col h-[100%] mt-20 text-[30px] font-semibold text-center text-[white] '>
        HERE ARE MY PROJECTS 
          <div  className=' mt-16'>
            <div  data-aos="fade-down-right">
    <img  className='w-[100%]' src="https://media.discordapp.net/attachments/942157875323748363/1092553981512929311/Screenshot_2023-03-29_160931.png?width=960&height=483" alt="" />
            </div>
<div  data-aos="fade-down-left">

          <img className='w-[100%] mt-20' src="https://media.discordapp.net/attachments/942157875323748363/1092553981756182528/Screenshot_2023-03-29_160447.png?width=1333&height=671" alt="" />
</div>
<div  data-aos="fade-down-right">

          <img className='w-[100%] mt-20' src="https://media.discordapp.net/attachments/942157875323748363/1092553982209175582/Screenshot_2023-03-29_160803.png?width=1346&height=671" alt="" />
</div>
          </div>
        </div>
    </div>
  )
}

export default Projects