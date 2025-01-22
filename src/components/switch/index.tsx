import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { classNames } from '../../utils/classnames'
import { useAsyncEventHandler } from '../../utils/errors'

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    Omit<React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, 'onCheckedChange'> & {
        onCheckedChange?(checked: boolean): Promise<void> | void
    }
>(({ className, onCheckedChange, ...props }, ref) => {
    const handler = useAsyncEventHandler(onCheckedChange)
    return (
        <SwitchPrimitives.Root
            className={classNames(
                'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
                className
            )}
            {...props}
            onCheckedChange={handler.handler}
            disabled={handler.loading || props.disabled}
            ref={ref}
        >
            <SwitchPrimitives.Thumb
                className={classNames(
                    'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
                )}
            />
        </SwitchPrimitives.Root>
    )
})
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
