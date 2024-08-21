import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { classNames } from '../../utils/classnames'
import { Loader2Icon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../tooltip'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50',
    {
        variants: {
            variant: {
                primary: 'bg-primary text-primary-foreground hover:bg-primary/90 hover:disabled:bg-primary',
                destructive:
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:disabled:bg-destructive',
                outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:disabled:bg-background',
                secondary:
                    'bg-secondary border-1 border-input text-secondary-foreground hover:bg-secondary/80 hover:disabled:bg-secondary',
                ghost: 'hover:bg-accent hover:text-accent-foreground hover:disabled:bg-accent',
                link: 'text-primary underline-offset-4 hover:underline disabled:hover:no-underline',
            },
            size: {
                md: 'h-9 px-4 py-2',
                sm: 'h-8 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    },
)

const iconVariants = cva('mr-2', {
    variants: {
        size: {
            sm: '[&>svg]:h-3.5 [&>svg]:w-3.5',
            md: '[&>svg]:h-4 [&>svg]:w-4',
            lg: '[&>svg]:h-6 [&>svg]:w-6',
            icon: '[&>svg]:h-7 [&>svg]:w-7',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

const loaderVariants = cva('mr-2 animate-spin', {
    variants: {
        size: {
            sm: '[&>svg]:h-4 [&>svg]:w-4',
            md: '[&>svg]:h-4 [&>svg]:w-4',
            lg: '[&>svg]:h-6 [&>svg]:w-6',
            icon: '[&>svg]:h-7 [&>svg]:w-7',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})
const Button = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<'button'> &
        VariantProps<typeof buttonVariants> & {
            asChild?: boolean
            icon?: React.ReactNode
            loading?: boolean
            tooltip?: React.ReactNode
        }
>(({ className, variant, size, asChild = false, children, loading, icon, disabled, tooltip, type, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    const button = (
        <Comp
            className={classNames(buttonVariants({ variant, size, className }))}
            ref={ref}
            disabled={loading || disabled}
            type={type || 'button'}
            {...props}
        >
            {loading && <Loader2Icon className={classNames(loaderVariants({ size }))} />}
            {!loading && icon && <span className={classNames(iconVariants({ size }))}>{icon}</span>}
            <Slottable>{children}</Slottable>
        </Comp>
    )

    if (tooltip) {
        return (
            <TooltipProvider delayDuration={200}>
                <Tooltip>
                    <TooltipTrigger asChild>{button}</TooltipTrigger>
                    <TooltipContent>{tooltip}</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        )
    }

    return button
})
Button.displayName = 'Button'

export { Button, buttonVariants }
