import { useEffect, useState } from "react"
import CardCarousel from "./CardCarousel"
import Link from "next/link"
import { MdNavigateBefore } from 'react-icons/md'
import { MdNavigateNext } from 'react-icons/md'

export default function MovieCarousel({ listmovie }) {
    const [index, setIndex] = useState(1)
    const [nextIndex, setNextIndex] = useState(2)
    const [beforeIndex, setBeforeIndex] = useState(listmovie.length)
    const [slideShowAnimation, setSlideShowAnimation] = useState(null)

    const getCarousel = listmovie.find(data=>data.id===index)
    const getCarouselBefore = listmovie.find(data=>data.id === beforeIndex)
    const getCarouselNext = listmovie.find(data=>data.id===nextIndex)

    useEffect(()=>{
        setBeforeIndex(index <= 1 ? listmovie.length : index - 1)
        setNextIndex(index >= listmovie.length ? 1 : index + 1)
    },[index])

    const handleClickBeforeCarousel = () => {
        setIndex(prevInterval=>prevInterval > 1 ? prevInterval - 1 : listmovie.length)
        setSlideShowAnimation('translate-x-0')
    }

    const handleClickNextCarousel = () => {
        setIndex(prevInterval=>prevInterval < listmovie.length ? prevInterval + 1 : 1)
        setSlideShowAnimation('translate-x-0')
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full h-fit relative md:flex md:items-center md:justify-center gap-4 md:p-5 md:bg-black">
                <CardCarousel 
                poster={getCarouselBefore.image} 
                title={getCarouselBefore.title} 
                pos={'before'}
                slideShowAnimation={slideShowAnimation} />
                <CardCarousel 
                poster={getCarousel.image} 
                title={getCarousel.title} 
                pos={'index'}
                slideShowAnimation={slideShowAnimation} />
                <CardCarousel 
                poster={getCarouselNext.image} 
                title={getCarouselNext.title} 
                pos={'next'}
                slideShowAnimation={slideShowAnimation} />
                <button onClick={handleClickNextCarousel}  className="w-1/5 md:w-[20%] h-full text-white absolute top-0 left-0 hover:bg-gradient-to-r hover:from-black to-transparent bg-opacity-0 hover:bg-opacity-40 bg-opaciy-50 md:pl-10"><MdNavigateBefore className="hidden md:block w-20 h-20" /></button>
                <button onClick={handleClickBeforeCarousel} className="w-1/5 md:w-[20%] h-full text-white absolute top-0 right-0 hover:bg-gradient-to-l hover:from-black to-transparent bg-opacity-0 hover:bg-opacity-40 flex items-center justify-end bg-opaciy-50 md:pr-10"><MdNavigateNext className="hidden w-20 h-20 md:block" /></button>
            </div>
            <div className="w-64 h-full bg-black text-white font-semibold mx-auto rounded-br-xl rounded-bl-xl pb-3 px-3 text-center md:w-[22rem]">
                <p className="drop-shadow-lg w-full h-fit mt-2">{getCarousel.title}</p>
                <Link href={`/movie/${getCarousel.id}`}>
                    <button className="bg-yellow-500 w-full py-1 mt-2">Beli Tiket</button>
                </Link>
            </div>
        </div>
    )
}