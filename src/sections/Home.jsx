

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
      
      
      {modal &&  <div className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute bg-black w-[50%] h-[45%] "> 
     DI
      </div>}
      <div onClick={() => {setModal(false)}} className={` ${modal && "translate-y-[-250%] opacity-100" } absolute left-[50%] bottom-[10%] transition-all opacity-0 border-2 cursor-pointer rounded-full px-2 duration-1000ms ease-in-out border-black   `}>
X
      </div>

    </div>
  ) 
}

export default Home