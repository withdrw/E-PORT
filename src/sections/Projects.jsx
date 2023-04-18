import React, { useState } from 'react'
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
            <div className='flex flex-col data__para items-center '  data-aos="fade-down-right">

              <div className='w-[80%] relative'> 

                <div className='img__para bg-[gray]/30 absolute w-[100%] h-[100%]'>
              <p> 
                This project was created for users to chat with others about things in common and post threads to interact with others.
              </p>
                </div>
    <img className=' img__two w-[80%]' src="https://media.discordapp.net/attachments/942157875323748363/1092553981512929311/Screenshot_2023-03-29_160931.png?width=960&height=483" alt="" />
              </div>
      
            </div>
<div classname='flex flex-col data__para items-center' data-aos="fade-down-left">
  <div className='w-[80%] relative'>
  <div className='img__para bg-[gray]/30 absolute w-[100%] h-[100%]'>
  <p>
    Netflix clone made using Typescript. Receives backend data from TMDBApi and YoutubeApi to get movie & show trailers. Also has real ratings for each movie and show on the site.
  </p>
    </div>    

          <img className='img__two w-[80%]' src="https://media.discordapp.net/attachments/942157875323748363/1092553981756182528/Screenshot_2023-03-29_160447.png?width=1333&height=671" alt="" />
  </div>
</div>
<div className='flex flex-col data__para items-center'  data-aos="fade-down-right">
  <div className='w-[80%] relative'>
<div className='img__para bg-[gray]/30 absolute w-[100%] h-[100%]'>
  <p>
    A library created using JavaScript,HTML,CSS one of the first projects I first worked on.
  </p>
</div>
  

          <img className='img__two w-[100%]  mt-20' src="https://media.discordapp.net/attachments/942157875323748363/1092553982209175582/Screenshot_2023-03-29_160803.png?width=1346&height=671" alt="" />
  </div>
</div>
          </div>
        </div>
    </div>
  )
}

export default Projects
