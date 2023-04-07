

function Home({setModal,modal}) {


  return (

    <div className="h-screen relative">
      <div className=" h-[calc(100%-80px)] relative flex items-center justify-center" >

        <div className="text-start max-w-[800px] w-[100%] mb-60 ">
        <h1 className="text-[44px] font-bold mb-3  "> 
        Front-end Developer 
        </h1>
        <p className="font-bold text-[20px] w-[50%] mt-[22px] ">
        Studying to become a frontend web developer, with lots of passion and motivation to learn more. Some of the languages I'm familiar with are HTML , CSS , JavaScript and currently in the process of learning React .
        </p>
        </div>
        <img className="pb-40 w-[30%] z-10 " src="" alt="" />
      </div> 
      
      
      {modal &&  <div className=" shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute bg-[blue]/50 w-[50%] h-[55%] rounded-xl text-white "> 
      <div className="bg-[black] w-[50%] h-[100%] ml-0">

      <h1 className=" font-semibold text-[20px] ml-6 pt-14 ">
        About Me 
      </h1>
      <p className="w-[60%] leading-8  ml-6 mt-10">
      I'm a 22 year-old Pakistani frontend software engineer with a strong passion for developing websites with great user experiences.
I currently just work on basic websites that are easy to walkthrough, also learning from other frontend engineers on how to solve harder problems and get a better understanding.
      </p>

      </div>
      </div>}
      <div onClick={() => {setModal(false)}} className={` ${modal && "translate-y-[-250%] opacity-100" } absolute left-[50%] bottom-[10%] transition-all opacity-0 border-2 cursor-pointer rounded-full px-2 duration-1000ms ease-in-out border-black   `}>
X
      </div>

    </div>
  ) 
}

export default Home