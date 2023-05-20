import Image from "next/image"

export default function Card({ initialData }) {
    return (
        <>
        {
            initialData.map(data=>(
                <div className="w-full h-fit min-h-[256px] rounded-lg shadow-md hover:scale-105 duration-150 relative space-y-2 md:flex md:gap-10 md:p-5 md:items-center md:justify-center">
                    <div className="w-full h-40 border relative rounded-tr-lg rounded-tl-lg overflow-hidden md:h-52 md:rounded-lg">
                        <Image src={data?.frontImage || '/images/image-not-available.jpg'} alt={'gambar utama'} fill className="object-cover" loading="lazy" />
                    </div>
                    <div className="w-full p-2 space-y-2">
                        <p className="font-bold">{data?.title}</p>
                        <p className="text-sm">{data?.date}</p>
                        <p className="">{data?.content}</p>
                    </div>
                </div>
            ))
        }
        </>
    )
}