import { forwardRef, useEffect, useRef } from 'react'
import * as React from 'react'
import { classNames } from '../../utils/classnames'
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize'

const Textarea = forwardRef<
    HTMLTextAreaElement,
    Omit<React.ComponentPropsWithoutRef<'textarea'>, 'style'> &
        Pick<TextareaAutosizeProps, 'style' | 'maxRows' | 'minRows'> & {
            autoSize?: boolean
        }
>(({ className, minRows, maxRows, autoSize, ...props }, ref) => {
    const isAutoSize = autoSize !== false && (minRows || maxRows)
    const classes = classNames(
        'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive',
        isAutoSize && 'resize-none',
        className
    )

    if (isAutoSize) {
        return <TextareaAutosize className={classes} ref={ref} minRows={minRows} maxRows={maxRows} {...props} />
    }

    return <textarea className={classes} ref={ref} {...props} />
})

Textarea.displayName = 'Textarea'

export { Textarea }
