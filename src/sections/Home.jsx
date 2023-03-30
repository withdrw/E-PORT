import Header from "./Header"
import Projects from "./Projects"

function Home() {
  return (

    <div className="h-screen">
      <Header/>
      <div className="h-[calc(100%-80px)] flex items-center justify-center bg-[red]/40" >

        <div className="text-start max-w-[800px] w-[100%] mb-80   ">
        <h1 className="text-[44px] font-bold mb-2  "> 
        Front-end Developer 
        </h1>
        <p className="font-bold text-[20px] w-[50%] ">
        Studying to become a frontend web developer, with lots of passion and motivation to learn more. Some of the languages I'm familiar with are HTML , CSS , JavaScript and currently in the process of learning React .
        </p>
        </div>
        <img className="pb-40 w-[15%]" src="https://static.vecteezy.com/system/resources/thumbnails/005/177/282/small_2x/worker-of-developer-web-free-vector.jpg" alt="" />
      </div> 
      <div>

      <Projects/>
      </div>
    </div>
  ) 
}

export default Home