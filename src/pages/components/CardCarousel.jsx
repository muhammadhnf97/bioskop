import Image from "next/image"

export default function CardCarousel({ poster, pos }) {
    return (
        <div className={`w-64 h-96 border ${pos === 'index' ? 'relative' : `absolute top-0  ${pos === 'before' ? '-right-52' : '-left-52' }`} mx-auto`}>
            <div className="relative w-full h-full">
                <Image src={poster} alt="image" fill className="object-cover object-center" />
            </div>
        </div>
    )
}
