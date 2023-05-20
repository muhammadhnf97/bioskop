import Image from "next/image"
import { useEffect, useState } from "react"

export default function CardCarousel({ poster, pos }) {


    const [slideCarousel, setSlideCarousel] = useState(null)

    useEffect(()=>{
        if(pos === 'index'){
            setSlideCarousel(`relative md:static`)
        } else if(pos === 'before'){
            setSlideCarousel('absolute -right-52 md:static md:translate-x-0 top-0')
        } else if(pos === 'next'){
            setSlideCarousel('absolute -left-52 md:static md:translate-x-0 top-0 ')
        }
    }, [])


    return (
        <div className={`w-64 h-96 mx-auto md:mx-0 md:w-[22rem] md:h-[31rem] transition-transform duration-150 ${slideCarousel}`}>
            <div className={`relative w-full h-full`}>
                <Image src={poster} alt="image" fill className="object-cover object-center" />
            </div>
        </div>
    )
}
