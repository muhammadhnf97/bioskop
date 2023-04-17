// import { useTheme } from "../context/theme";

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function Header() {
    const [mounted, setMounted]= useState(false)
    const {theme, setTheme} = useTheme()

    const handleClickDarkMode = (theme) => {
        if(theme === 'dark'){
            setTheme(theme)
        } else {  
            setTheme(theme)
        }
    }

    
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    console.log(theme)

    return (
        <nav className="w-full h-14 border-b">
            <div className="px-5 max-w-7xl h-full mx-auto flex justify-end items-center">
                <div className="flex gap-3 items-center">
                    <p>Dark</p>
                    <div className="border-2 w-[53px] border-blue-400 flex items-center p-1 rounded-full">
                        <button className={`w-5 h-5 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 rounded-full duration-300 transform ${theme === 'light' ? 'translate-x-5' : 'translate-x-0 invisible'}`} onClick={()=>handleClickDarkMode('dark')}></button>
                        <button className={`w-5 h-5 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 rounded-full duration-300 transform ${theme === 'dark' ? '-translate-x-5' : 'translate-x-0 invisible'}`} onClick={()=>handleClickDarkMode('light')}></button>
                    </div>
                    <p>Light</p>
                </div>
            </div>
        </nav>
    )
}