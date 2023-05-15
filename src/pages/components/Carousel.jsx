import { useEffect, useState } from "react"
import Image from "next/image"
import { BsArrowLeft } from 'react-icons/bs' 
import { BsArrowRight } from 'react-icons/bs' 
import { watchnow } from "../lib/moviedata"

export default function Carousel() {
    const [index, setIndex] = useState(1)

    const getCarousel = watchnow.find(data=>data.id===index)


    useEffect(()=>{

        const interval = setInterval(()=>{
            setIndex(prevInterval=>prevInterval < watchnow.length ? prevInterval + 1 : 1)
        }, 5000)
        
        return () => clearInterval(interval)
    },[])

    const handleClickBeforeCarousel = () => {
        setIndex(prevInterval=>prevInterval > 1 ? prevInterval - 1 : watchnow.length)
    }

    const handleClickNextCarousel = () => {
        setIndex(prevInterval=>prevInterval < image.length ? prevInterval + 1 : 1)
    }

    return (
        <div className="w-full h-40 relative">
            <div className="relative w-full h-full border border-red-500">
                <Image src={getCarousel?.image} alt="image" fill className="object-cover object-center" />
            </div>
            <div className="bg-black w-full h-full absolute top-0 bg-opacity-20">
                <p className="absolute bottom-3 left-5 font-semibold text-white text-lg drop-shadow-lg">{getCarousel.title}</p>
            </div>
            <button onClick={handleClickBeforeCarousel}>
                <BsArrowLeft className="w-10 h-10 text-white opacity-50 hover:opacity-100 absolute top-1/2 -translate-y-1/2 z-10 left-5 hover:translate-x-2 duration-150" />
            </button>
            <button onClick={handleClickNextCarousel}>
                <BsArrowRight className="w-10 h-10 text-white opacity-50 hover:opacity-100 absolute top-1/2 -translate-y-1/2 z-10 right-5 hover:-translate-x-2 duration-150" />
            </button>
        </div>
    )
}