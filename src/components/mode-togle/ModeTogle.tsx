"use client"

import * as React from "react"
import {useState} from "react"
import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"

import {Button} from "@/components/ui/button"

export function ModeToggle() {
    const {setTheme, systemTheme} = useTheme()
    const [darkMode, setDarkMode] = useState(systemTheme === "dark")
    const handleClick = () => {
        setDarkMode(prev => !prev)
        setTheme(prev => prev === "dark" ? "light" : "dark")
    }

    return (
        <Button variant="ghost" size="icon" className={"h-8 w-8"} onClick={handleClick}>
            {darkMode ? <Moon/> : <Sun/>}
        </Button>
    )
}
