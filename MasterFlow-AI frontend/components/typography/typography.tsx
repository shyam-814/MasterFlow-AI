import React from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const typographyVariants = cva(
    "font-poppins",
    {
        variants: {
            variant: {
                h1: "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
                h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
                h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
                h4: "scroll-m-20 text-xl font-semibold tracking-tight",
                h5: "scroll-m-20 text-lg font-semibold tracking-tight",
                h6: "scroll-m-20 text-base font-semibold tracking-tight",
                body: "text-base leading-7",
                bodyLarge: "text-lg leading-7",
                bodySmall: "text-sm leading-6",
                caption: "text-xs leading-4",
                overline: "text-xs font-medium uppercase tracking-wider",
                label: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
                quote: "mt-6 border-l-2 pl-6 italic",
                lead: "text-xl text-muted-foreground",
                large: "text-lg font-semibold",
                small: "text-sm font-medium leading-none",
                muted: "text-sm text-muted-foreground",
            },
            weight: {
                light: "font-light",
                normal: "font-normal",
                medium: "font-medium",
                semibold: "font-semibold",
                bold: "font-bold",
            },
            align: {
                left: "text-left",
                center: "text-center",
                right: "text-right",
                justify: "text-justify",
            },
            color: {
                default: "text-foreground",
                muted: "text-muted-foreground",
                primary: "text-primary",
                secondary: "text-secondary-foreground",
                destructive: "text-destructive",
                success: "text-green-600 dark:text-green-400",
                warning: "text-yellow-600 dark:text-yellow-400",
                info: "text-blue-600 dark:text-blue-400",
            },
        },
        defaultVariants: {
            variant: "body",
            weight: "normal",
            align: "left",
            color: "default",
        },
    }
)

export interface TypographyProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
    as?: keyof JSX.IntrinsicElements
    children: React.ReactNode
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
    ({ className, variant, weight, align, color, as, children, ...props }, ref) => {
        const Comp = as || getDefaultElement(variant)

        return (
            <Comp
                className={cn(typographyVariants({ variant, weight, align, color, className }))}
                ref={ref}
                {...props}
            >
                {children}
            </Comp>
        )
    }
)

Typography.displayName = "Typography"

function getDefaultElement(variant: string | null | undefined): keyof JSX.IntrinsicElements {
    switch (variant) {
        case 'h1': return 'h1'
        case 'h2': return 'h2'
        case 'h3': return 'h3'
        case 'h4': return 'h4'
        case 'h5': return 'h5'
        case 'h6': return 'h6'
        case 'quote': return 'blockquote'
        case 'code': return 'code'
        case 'lead':
        case 'body':
        case 'bodyLarge':
        case 'bodySmall':
        case 'large':
        case 'small':
        case 'muted':
        default: return 'p'
    }
}

export { Typography, typographyVariants }