

function Home({setModal,modal}) {


  return (

    <div className="h-screen relative">
      <div className= "  h-[calc(100%-80px)] relative flex items-center justify-center " >

        <div className="text-start max-w-[800px] w-[100%] mb-60 ">
        <h1 className="text-[44px] font-bold mb-3  "> 
        Front-end Developer 
        </h1>
        <p className="font-bold text-[20px] w-[50%] mt-[22px] ">
        Studying to become a frontend web developer, with lots of passion and motivation to learn more. Some of the languages I'm familiar with are HTML , CSS , JavaScript and currently in the process of learning React .
        </p>
        </div>
        <img className="pb-40 w-[30%] z-10  " src="https://media.discordapp.net/attachments/1091493198423142472/1095042525464641647/computer-science-desktop-wallpaper-programmer-clip-art-computer-removebg-preview.png" alt="" />
      </div> 
      
      <div onClick={() => {setModal(false)}}  className={`top-0 h-screen  absolute w-[100%]  backdrop-blur	   ${modal?  "z-10": "-z-10" }`  }>
      </div>
       
       
       
       
       <div className={`   -z-20 shadow-xl top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute bg-[white] w-[50%] rounded-xl text-white   ${modal &&  "showmodal block" }` }> 
      
      <div className="flex h-[100%] ">

      
      <div className="bg-[black] w-[50%] h-[100%] ml-0">

      <h1 className=" font-semibold text-[20px] ml-6 pt-14  ">
        About Me 
      </h1>
      <p className="w-[60%] leading-8  ml-6 mt-10 mb-10">
      I'm a 22 year-old Pakistani frontend software engineer with a strong passion for developing websites with great user experiences.
I currently just work on basic websites that are easy to walkthrough, also learning from other frontend engineers on how to solve harder problems and get a better understanding.
      </p>

      

      </div>
      <div className="w-[50%] bg-white h-[100%] flex flex-col m-4 items-center ">
    <form className="flex flex-col text-black max-w-[80%] w-[100%] mt-7" action="">
      <label className="text-black" htmlFor="">
        Name: 
      </label>
      <input className="border mt-4  mb-4" required type="text" placeholder="Name" />

      <label  htmlFor="">
        Email:
      </label>
      <input className="border mt-4  mb-4" required type="text" placeholder="Email" />
      <label htmlFor="">Message:</label>

      <textarea placeholder="Type in your message" className="border" required name="" id="" cols="20" rows="5"></textarea>
      <button className=" mt-10 bg-[red] max-w-[30%]"> Send it</button>
    </form> 
      </div>
      </div>
      </div>
      <div onClick={() => {setModal(false)}} className={` ${modal && "translate-y-[-250%] opacity-100 z-20" } absolute left-[50%] bottom-[10%] transition-all opacity-0 border-2 cursor-pointer rounded-full px-2 duration-1000ms ease-in-out border-black   `}>
X
      </div>

    </div>
  ) 
}

export default Home