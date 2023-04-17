import { useEffect, useState } from "react"
import { getTitle } from "@/getapi/api"
import Card from "./components/Card"

export default function Home() {
  const [movie, setMovie] = useState([])

  useEffect(()=>{
    getTitle().then(data=>setMovie(data.results))
  }, [])

  return (
    <div className="w-full p-5 border border-yellow-500">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Card movie={movie} />
      </div>
      <p className="dark:text-yellow-400">Hello masbro</p>
    </div>
  )
}
