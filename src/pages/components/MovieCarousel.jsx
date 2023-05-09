import { useEffect, useState } from "react"
import CardCarousel from "./CardCarousel"
import Link from "next/link"

export default function MovieCarousel({ listmovie }) {
    const [index, setIndex] = useState(1)
    const [nextIndex, setNextIndex] = useState(2)
    const [beforeIndex, setBeforeIndex] = useState(listmovie.length)

    const getCarousel = listmovie.find(data=>data.id===index)
    const getCarouselBefore = listmovie.find(data=>data.id === beforeIndex)
    const getCarouselNext = listmovie.find(data=>data.id===nextIndex)

    console.log(beforeIndex, index, nextIndex)

    useEffect(()=>{
        setBeforeIndex(index <= 1 ? listmovie.length : index - 1)
        setNextIndex(index >= listmovie.length ? 1 : index + 1)
    },[index])

    const handleClickBeforeCarousel = () => {
        setIndex(prevInterval=>prevInterval > 1 ? prevInterval - 1 : listmovie.length)
    }

    const handleClickNextCarousel = () => {
        setIndex(prevInterval=>prevInterval < listmovie.length ? prevInterval + 1 : 1)
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full h-fit relative">
                <CardCarousel poster={getCarousel.image} title={getCarousel.title} pos={'index'} />
                <CardCarousel poster={getCarouselBefore.image} title={getCarouselBefore.title} pos={'before'} />
                <CardCarousel poster={getCarouselNext.image} title={getCarouselNext.title} pos={'next'} />
                <button onClick={handleClickNextCarousel}  className="w-1/5 h-full text-white absolute top-0 z-20 left-0 duration-150"></button>
                <button onClick={handleClickBeforeCarousel} className="w-1/5 h-full text-white absolute top-0 z-10 right-0 hover:bg-opacity-50 duration-150"></button>
            </div>
            <div className="w-64 h-full bg-black text-white font-semibold mx-auto rounded-br-xl rounded-bl-xl px-2 py-2 text-center">
                <p className="drop-shadow-lg">{getCarousel.title}</p>
                <Link href={`/movie/${getCarousel.id}`}>
                    <p className="bg-yellow-500">Beli Tiket</p>
                </Link>
            </div>
        </div>
    )
}