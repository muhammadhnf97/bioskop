import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { watchnow } from "../lib/moviedata"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    const router = useRouter()
    const { id } = router.query

    const getMovieData = watchnow.find(data=>data.id === parseInt(id))

    return(
        <>
        <div className="w-full bg-black p-2 space-y-5">
            <h2 className="text-2xl text-white font-semibold text-center md:text-4xl">{getMovieData?.title}</h2>
            <div className="flex flex-col items-center justify-center text-justify space-y-5 md:flex-row md:py-5 md:px-20 md:gap-4">
                <div className="relative w-64 h-96 rounded-xl overflow-hidden  md:w-[22rem] md:h-[31rem]">
                    <Image src={getMovieData?.image} alt="poster" fill  />
                </div>
                <div className="text-white space-y-5 md:flex-1 md:text-lg">
                    <p className="text-white">{getMovieData?.sinopsis}</p>
                    <p>Lama Movie : {getMovieData?.time}</p>
                </div>
            </div>
        </div>
        <div className="w-full px-2">
            <button className="mt-2 rounded-lg w-full py-3 bg-blue-400 text-2xl text-white font-bold hover:bg-blue-500 active:bg-blue-600">BELI TIKET</button>
        </div>
        <div className="px-4 py-4">
            <h3 className="font-bold text-2xl">CAST</h3>
            <div className="space-y-5 py-5 w-full">
                {getMovieData?.cast?.map((data, index)=>(
                <div key={index} className="flex items-center w-full gap-5">
                    <Image src={data.image} alt="image" height={60} width={60} className="object-cover rounded-full" />
                    <p>{data.name}</p>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}