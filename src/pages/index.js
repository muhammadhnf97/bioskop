import { useEffect, useState } from "react"
import { getTitle, getUpcoming } from "@/getapi/api"
import { watchnow } from "./lib/moviedata"
import { BsArrowRightShort } from 'react-icons/bs'
import MovieCarousel from "./components/MovieCarousel"

export default function Home() {
  const [movie, setMovie] = useState([])

  const [upcoming, setUpcoming] = useState([])

  useEffect(()=>{
    getTitle().then(data=>setMovie(data.results))
    getUpcoming().then(data=>setUpcoming(data.results))
  }, [])

  console.log(upcoming)

  return (
    <div className="space-y-2 pt-2">
      <div className="w-full flex justify-between items-center px-5 ">
        <h2 className="font-semibold text-md">Sedang Tayang</h2>
        <div className="text-sm font-semibold text-gray-700 flex items-center justify-center gap-1 group">
          <span>Semua</span>
          <span className="group-hover:translate-x-1 duration-100">
            <BsArrowRightShort />
          </span>
        </div>
      </div>
      <MovieCarousel listmovie={watchnow}/>
      <div className="w-full p-5 mt-10">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* <Card movie={movie} /> */}
        </div>
      </div>
    </div>
  )
}
