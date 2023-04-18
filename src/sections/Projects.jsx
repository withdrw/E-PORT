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
            <div className='data__para '  data-aos="fade-down-right">
              

              
              <p  className='img__para absolute '> 
                This project was created for users to chat with others about things in common and post threads to interact with others.
              </p>
    <img className='img__one img__two w-[80%] ml-40' src="https://media.discordapp.net/attachments/942157875323748363/1092553981512929311/Screenshot_2023-03-29_160931.png?width=960&height=483" alt="" />
      <h1>
        Forum 
      </h1>
      
            </div>
<div classname='data__para' data-aos="fade-down-left">
  <p className='img__para '>
    Netflix clone made using Typescript. Receives backend data from TMDBApi and YoutubeApi to get movie & show trailers. Also has real ratings for each movie and show on the site.
  </p>

          <img className='w-[80%] img__two mt-20' src="https://media.discordapp.net/attachments/942157875323748363/1092553981756182528/Screenshot_2023-03-29_160447.png?width=1333&height=671" alt="" />
    Netflix Clone
</div>
<div  data-aos="fade-down-right">
  <p className='absolute'>
    A library created using JavaScript,HTML,CSS one of the first projects I first worked on.
  </p>

          <img className='img__one  mt-20' src="https://media.discordapp.net/attachments/942157875323748363/1092553982209175582/Screenshot_2023-03-29_160803.png?width=1346&height=671" alt="" />
          Library
</div>
          </div>
        </div>
    </div>
  )
}

export default Projects
