import { forwardRef, useEffect, useRef } from 'react'
import * as React from 'react'
import { classNames } from '../../utils/classnames'

const Textarea = forwardRef<
    HTMLTextAreaElement,
    React.ComponentPropsWithoutRef<'textarea'> & {
        /**
         * Automatically adjust the height of the textarea based on its content
         */
        autoSize?: boolean
    }
>(({ className, rows = 3, onInput, autoSize, ...props }, ref) => {
    const innerRef = useRef<HTMLTextAreaElement | null>(null)

    useEffect(() => {
        if (innerRef.current && autoSize) {
            resetSize(innerRef.current)
            updateSize(innerRef.current)
        }
    }, [props.defaultValue, props.value])

    return (
        <textarea
            className={classNames(
                'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive',
                autoSize && 'resize-none',
                className,
            )}
            ref={(value) => {
                innerRef.current = value
                if (typeof ref === 'function') {
                    ref(value)
                } else if (ref) {
                    ref.current = value
                }
            }}
            rows={rows}
            onInput={(e) => {
                if (innerRef.current && autoSize) {
                    updateSize(innerRef.current)
                }
                onInput?.(e)
            }}
            {...props}
        />
    )
})

function updateSize(textAreaRef: HTMLTextAreaElement) {
    const minHeight = 0
    const maxHeight = Number.MAX_SAFE_INTEGER
    // We need to reset the height momentarily to get the correct scrollHeight for the textarea

    const offsetBorder = 2
    textAreaRef.style.height = `${minHeight + offsetBorder}px`
    const scrollHeight = textAreaRef.scrollHeight
    // We then set the height directly, outside of the render loop
    // Trying to set this with state or a ref will product an incorrect value.
    if (scrollHeight > maxHeight) {
        textAreaRef.style.height = `${maxHeight}px`
    } else {
        textAreaRef.style.height = `${scrollHeight + offsetBorder}px`
    }
}

function resetSize(textAreaRef: HTMLTextAreaElement) {
    const minHeight = 0
    const maxHeight = Number.MAX_SAFE_INTEGER
    const offsetBorder = 2

    textAreaRef.style.minHeight = `${minHeight + offsetBorder}px`
    if (maxHeight > minHeight) {
        textAreaRef.style.maxHeight = `${maxHeight}px`
    }
}

Textarea.displayName = 'Textarea'

export { Textarea }
