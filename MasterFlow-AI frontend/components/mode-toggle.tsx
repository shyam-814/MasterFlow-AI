"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="flex items-center rounded-full border bg-background p-1">
            <div className="relative flex items-center rounded-full bg-muted p-1">
                <div
                    className={cn(
                        "absolute inset-y-1 left-1 w-[calc(33.33%-4px)] rounded-full bg-background shadow-sm transition-all duration-300 ease-in-out",
                        theme === "light"
                            ? "translate-x-[calc(100%+2px)]"
                            : theme === "dark"
                                ? "translate-x-[calc(200%+4px)]"
                                : "translate-x-0",
                    )}
                />
                <button
                    onClick={() => setTheme("system")}
                    className={cn(
                        "relative z-10 flex h-7 w-full min-w-[2.5rem] items-center justify-center rounded-full text-sm font-medium transition-colors",
                        theme === "system" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                >
                    <Monitor className="h-4 w-4" />
                    <span className="sr-only">System</span>
                </button>
                <button
                    onClick={() => setTheme("light")}
                    className={cn(
                        "relative z-10 flex h-7 w-full min-w-[2.5rem] items-center justify-center rounded-full text-sm font-medium transition-colors",
                        theme === "light" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                >
                    <Sun className="h-4 w-4" />
                    <span className="sr-only">Light</span>
                </button>
                <button
                    onClick={() => setTheme("dark")}
                    className={cn(
                        "relative z-10 flex h-7 w-full min-w-[2.5rem] items-center justify-center rounded-full text-sm font-medium transition-colors",
                        theme === "dark" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                >
                    <Moon className="h-4 w-4" />
                    <span className="sr-only">Dark</span>
                </button>
            </div>
        </div>
    )
}
