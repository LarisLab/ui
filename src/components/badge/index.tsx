import * as React from 'react'
import { classNames } from '../../utils/classnames'
import { createVariants } from '../../utils/cva'
import { VariantProps } from 'class-variance-authority'

const badgeVariants = createVariants(
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    {
        variants: {
            variant: {
                primary: 'border-transparent bg-primary text-primary-foreground',
                secondary: 'border-transparent bg-secondary text-secondary-foreground',
                destructive: 'border-transparent bg-destructive text-destructive-foreground',
                outline: 'text-foreground',
            },
        },
        defaultVariants: {
            variant: 'primary',
        },
    },
)

const Badge = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<'div'> & VariantProps<typeof badgeVariants>
>(({ className, variant, ...props }, ref) => (
    <div ref={ref} className={classNames(badgeVariants({ variant }), className)} {...props} />
))
Badge.displayName = 'Badge'

export { Badge }