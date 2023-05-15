import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { CgMenuMotion } from 'react-icons/cg'
import { ImCross } from 'react-icons/im'
import Image from "next/image"
import { useLogin } from "../context/login"
import Link from "next/link"

export default function Header() {
    const [isDropDownNavbar, setIsDropDownNavbar] = useState(false)

    const [mounted, setMounted]= useState(false)
    const {theme, setTheme} = useTheme()

    const {loginData} = useLogin()

    const handleClickDarkMode = (theme) => {
        if(theme === 'dark'){
            setTheme(theme)
        } else {  
            setTheme(theme)
        }
    }

    const handleClickDropDownNavbar = () => {
        setIsDropDownNavbar(prev=>!prev)
    }

    
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }



    return (
        <>
        <nav className="w-full h-14">
            <div className="px-5 w-full border h-full mx-auto flex justify-between items-center gap-5">
                <div className="w-fit flex items-center justify-center gap-2">
                    <Link href={'/'}>
                        <div className="relative w-14 h-14">
                            <Image src={'/images/icon.png'} alt="icon" fill className="object-contain" />
                        </div>
                    </Link>
                    <p className="text-lg font-bold text-red-800">W<span className="font-semibold text-[#FFBD61]">atch</span>W<span className="font-semibold text-[#FFBD61]">ith</span>M<span className="font-semibold text-[#FFBD61]">e</span></p>
                </div>
                <button className="w-10 h-10 border-l flex items-center justify-center duration-150 hover:text-[#FFBD61]" onClick={handleClickDropDownNavbar}><CgMenuMotion className="h-7 w-7" /></button>
                <div className="hidden md:flex w-full gap-3 items-center">
                    <p>Dark</p>
                    <div className="border-2 w-[53px] border-blue-400 flex items-center p-1 rounded-full">
                        <button className={`w-5 h-5 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 rounded-full duration-300 transform ${theme === 'light' ? 'translate-x-5' : 'translate-x-0 invisible'}`} onClick={()=>handleClickDarkMode('dark')}></button>
                        <button className={`w-5 h-5 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 rounded-full duration-300 transform ${theme === 'dark' ? '-translate-x-5' : 'translate-x-0 invisible'}`} onClick={()=>handleClickDarkMode('light')}></button>
                    </div>
                    <p>Light</p>
                </div>
            </div>
        </nav>
        {
            isDropDownNavbar &&
            <button className="fixed w-full h-full bg-black z-10 bg-opacity-75" onClick={handleClickDropDownNavbar}></button>
        }
        <div className="w-full py-2 text-center bg-[#a2d2ff]">
            <p className="text-sm">Halo ! <span className="font-semibold">{loginData.username}</span></p>
        </div>
        <div className={`absolute w-full h-fit bg-[#bde0fe] duration-150 transition-transform space-y-2 py-2 text-center  ${isDropDownNavbar ? 'translate-y-0 opacity-100 z-10' : ' opacity-0 -z-10 -translate-y-4'}`}>
            <p className="duration-150 hover:text-gray-800">Sedang Tayang</p>
            <p className="duration-150 hover:text-gray-800">Nonton Online</p>
            <p className="duration-150 hover:text-gray-800">PV</p>
            <p className="duration-150 hover:text-gray-800">Akan Tayang</p>
            <button className="p-3" onClick={handleClickDropDownNavbar}><ImCross /></button>
        </div>
        </>
    )
}