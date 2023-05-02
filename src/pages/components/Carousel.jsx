import { useEffect, useState } from "react"
import Image from "next/image"
import { BsArrowLeft } from 'react-icons/bs' 
import { BsArrowRight } from 'react-icons/bs' 
import { getUpcoming } from "@/getapi/api"

export default function Carousel() {
    const [index, setIndex] = useState(1)

    const [image, setImage] = useState([
        {   id: 1,
            image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title: "My Cameramen Always Survive"
        }, {
            id: 2,
            image: 'https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title: 'The Cursed Oldest Film: Next Generation'
        },{ 
            id: 3,
            image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title: 'My Little Pony Become Human'
        }
    ])
    const getCarousel = image.find(data=>data.id===index)


    useEffect(()=>{

        const interval = setInterval(()=>{
            setIndex(prevInterval=>prevInterval < image.length ? prevInterval + 1 : 1)
        }, 5000)
        
        return () => clearInterval(interval)
    },[])

    const handleClickBeforeCarousel = () => {
        setIndex(prevInterval=>prevInterval > 1 ? prevInterval - 1 : image.length)
    }

    const handleClickNextCarousel = () => {
        setIndex(prevInterval=>prevInterval < image.length ? prevInterval + 1 : 1)
    }

    return (
        <div className="w-full h-40 relative">
            <div className="relative w-full h-full">
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