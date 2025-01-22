import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { type VariantProps } from 'class-variance-authority'

import { classNames } from '../../utils/classnames'
import { createVariants } from '../../utils/cva'
import { useAsyncEventHandler } from '../../utils/errors'

const toggleVariants = createVariants(
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
    {
        variants: {
            variant: {
                ghost: 'bg-transparent',
                outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
            },
            size: {
                sm: 'h-9 px-2.5',
                md: 'h-10 px-3',
                lg: 'h-11 px-5',
            },
        },
        defaultVariants: {
            variant: 'ghost',
            size: 'md',
        },
    }
)

const Toggle = React.forwardRef<
    React.ElementRef<typeof TogglePrimitive.Root>,
    Omit<React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>, 'onPressedChange'> &
        VariantProps<typeof toggleVariants> & {
            onPressedChange?(pressed: boolean): Promise<void> | void
        }
>(({ className, variant, size, ...props }, ref) => {
    const handler = useAsyncEventHandler(props.onPressedChange)
    return (
        <TogglePrimitive.Root
            ref={ref}
            className={classNames(toggleVariants({ variant, size, className }))}
            {...props}
            onPressedChange={handler.handler}
            disabled={handler.loading || props.disabled}
        />
    )
})

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle }
