"use client"

import React, {useState, useEffect} from "react"
import {ThemeProvider as NextThemesProvider} from "next-themes"

export function ThemeProvider({children}: React.ComponentProps<typeof NextThemesProvider>) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => setIsMounted(true), []);

    if (!isMounted) return <div style={{visibility: "hidden"}}>{children}</div>

    return (
        <NextThemesProvider
            enableSystem
            disableTransitionOnChange
            defaultTheme="system"
            attribute="class"
        >
            {children}
        </NextThemesProvider>
    )
}
