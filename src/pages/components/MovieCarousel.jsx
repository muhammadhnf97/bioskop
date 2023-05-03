import { useEffect, useState } from "react"
import Image from "next/image"
import { BsArrowLeft } from 'react-icons/bs' 
import { BsArrowRight } from 'react-icons/bs' 
import { watchnow } from "../lib/moviedata"
import CardCarousel from "./CardCarousel"

export default function MovieCarousel() {
    const [index, setIndex] = useState(1)
    const [nextIndex, setNextIndex] = useState(2)
    const [beforeIndex, setBeforeIndex] = useState(watchnow.length)

    const getCarousel = watchnow.find(data=>data.id===index)
    const getCarouselBefore = watchnow.find(data=>data.id === beforeIndex)
    const getCarouselNext = watchnow.find(data=>data.id===nextIndex)
    // const getCarousel = watchnow.find(data=>data.id===index)

    console.log(beforeIndex, index, nextIndex)

    useEffect(()=>{

        const interval = setInterval(()=>{
            setIndex(prevInterval=>prevInterval < watchnow.length ? prevInterval + 1 : 1)
        }, 5000000)
        
        return () => clearInterval(interval)
    },[])

    useEffect(()=>{
        setBeforeIndex(index <= 1 ? watchnow.length : index - 1)
        setNextIndex(index >= watchnow.length ? 1 : index + 1)
    },[index])

    const handleClickBeforeCarousel = () => {
        setIndex(prevInterval=>prevInterval > 1 ? prevInterval - 1 : watchnow.length)
    }

    const handleClickNextCarousel = () => {
        setIndex(prevInterval=>prevInterval < watchnow.length ? prevInterval + 1 : 1)
    }

    return (
        <div className="w-full ">
            <div className="w-full h-fit relative">
                <CardCarousel poster={getCarousel.image} title={getCarousel.title} pos={'index'} />
                <CardCarousel poster={getCarouselBefore.image} title={getCarouselBefore.title} pos={'before'} />
                <CardCarousel poster={getCarouselNext.image} title={getCarouselNext.title} pos={'next'} />
                <button onClick={handleClickNextCarousel}  className="w-1/2 h-full text-white absolute top-0 z-20 left-0 duration-150"></button>
                <button onClick={handleClickBeforeCarousel} className="w-1/2 h-full text-white absolute top-0 z-10 right-0 hover:bg-opacity-50 duration-150"></button>
            </div>
            <div className="bg-black w-64 h-full mx-auto rounded-br-xl rounded-bl-xl px-2 py-2 text-center">
                <p className="text-white drop-shadow-lg font-semibold">{getCarousel.title}</p>
            </div>
        </div>
    )
}