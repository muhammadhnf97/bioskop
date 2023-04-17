import Image from "next/image"

export default function Card({ movie }) {
    console.log(movie)
    return (
        <>
        {
            movie.map(data=>(
                <div className="w-40 h-fit min-h-[256px] rounded-lg shadow-md hover:scale-105 duration-150 relative">
                    <div className="w-full h-40 border relative rounded-tr-lg rounded-tl-lg overflow-hidden">
                        <Image src={data?.primaryImage?.url || '/images/image-not-available.jpg'} alt={'gambar utama'} fill className="object-cover" />
                    </div>
                    <div className={`absolute top-32 left-1 shadow-sm rounded-md bg-white px-2 ${data?.titleType?.text === 'Movie' ? 'bg-blue-300' : 'bg-green-300'}`}>{data?.titleType?.text}</div>
                    <div className="w-full p-1">
                        <p className="font-bold">{data?.titleText?.text}</p>
                        <p className="text-sm">{data?.releaseDate?.year}</p>
                    </div>
                </div>
            ))
        }
        </>
    )
}