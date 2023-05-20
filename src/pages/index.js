import { useEffect, useState } from "react"
import { getTitle, getUpcoming } from "@/getapi/api"
import { watchnow, whatsnow } from "./lib/moviedata"
import { BsArrowRightShort } from 'react-icons/bs'
import MovieCarousel from "./components/MovieCarousel"
import Card from "./components/Card"

export default function Home() {
  const [movie, setMovie] = useState([])

  const [upcoming, setUpcoming] = useState([])

  useEffect(()=>{
    getTitle().then(data=>setMovie(data.results))
    getUpcoming().then(data=>setUpcoming(data.results))
  }, [])

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
      <div className="w-full p-5 mt-10 space-y-10">
        <h2 className="text-3xl font-bold">What's Now ?</h2>
        <div className="flex flex-col items-center justify-center gap-10 md:grid md:grid-cols-2 md:object-center md:gap-5 border object-center ">
          <Card initialData={whatsnow} />
        </div>
      </div>
    </div>
  )
}
