import Header from "./Header"
import Projects from "./Projects"

function Home() {
  return (

    <div className="h-screen">
      <div className="h-[calc(100%-80px)] flex items-center justify-center" >

        <div className="text-start max-w-[800px] w-[100%] mb-60 ">
        <h1 className="text-[44px] font-bold mb-3  "> 
        Front-end Developer 
        </h1>
        <p className="font-bold text-[20px] w-[50%] mt-[22px] ">
        Studying to become a frontend web developer, with lots of passion and motivation to learn more. Some of the languages I'm familiar with are HTML , CSS , JavaScript and currently in the process of learning React .
        </p>
        </div>
        <img className="pb-40 w-[30%] z-10 " src="https://o.remove.bg/downloads/e15add49-ed42-46a6-a5ad-49571b73a00d/computer-science-desktop-wallpaper-programmer-clip-art-computer-removebg-preview.png" alt="" />
      </div> 
      <div>

      </div>
    </div>
  ) 
}

export default Home