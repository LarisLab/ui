import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import {
    Controller,
    ControllerProps,
    FieldPath,
    FieldValues,
    FormProvider,
    useFormContext,
    useFormState,
    useForm,
    useFieldArray,
    useController,
    useWatch,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { classNames } from '../../utils/classnames'
import { Label } from '../label'
import { Button } from '../button'

const Form = FormProvider

type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
    name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
    props: ControllerProps<TFieldValues, TName>
) => {
    return (
        <FormFieldContext.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    )
}

const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext)
    const itemContext = React.useContext(FormItemContext)
    const { getFieldState, formState } = useFormContext()

    const fieldState = getFieldState(fieldContext.name, formState)

    if (!fieldContext) {
        throw new Error('useFormField should be used within <FormField>')
    }

    const { id } = itemContext

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    }
}

type FormItemContextValue = {
    id: string
}

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const id = React.useId()

        return (
            <FormItemContext.Provider value={{ id }}>
                <div ref={ref} className={classNames('space-y-2', className)} {...props} />
            </FormItemContext.Provider>
        )
    }
)
FormItem.displayName = 'FormItem'

const FormLabel = React.forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField()

    return (
        <Label
            ref={ref}
            className={classNames(error && 'text-destructive', className)}
            htmlFor={formItemId}
            {...props}
        />
    )
})
FormLabel.displayName = 'FormLabel'

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
    ({ ...props }, ref) => {
        const { error, formItemId, formDescriptionId, formMessageId } = useFormField()
        const { isLoading, isSubmitting } = useFormState()

        return (
            <Slot
                ref={ref}
                id={formItemId}
                aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
                aria-invalid={!!error}
                aria-disabled={isLoading || isSubmitting}
                {...{
                    ...props,
                    disabled: isLoading || isSubmitting,
                }}
            />
        )
    }
)
FormControl.displayName = 'FormControl'

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => {
        const { formDescriptionId } = useFormField()

        return (
            <p
                ref={ref}
                id={formDescriptionId}
                className={classNames('text-sm text-muted-foreground', className)}
                {...props}
            />
        )
    }
)
FormDescription.displayName = 'FormDescription'

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, children, ...props }, ref) => {
        const { error, formMessageId } = useFormField()
        const body = error ? String(error?.message) : children

        if (!body) {
            return null
        }

        return (
            <p
                ref={ref}
                id={formMessageId}
                className={classNames('text-sm font-medium text-destructive', className)}
                {...props}
            >
                {body}
            </p>
        )
    }
)
FormMessage.displayName = 'FormMessage'

const FormSubmit = React.forwardRef<HTMLButtonElement, Parameters<typeof Button>[0]>(
    ({ className, children, loading, ...props }, ref) => {
        const { isLoading, isSubmitting } = useFormState()

        return (
            <Button
                ref={ref}
                type="submit"
                className={className}
                loading={loading || isLoading || isSubmitting}
                {...props}
            >
                {children}
            </Button>
        )
    }
)
FormSubmit.displayName = 'FormSubmit'

const useFormArray = useFieldArray
const useFormController = useController
const useFormWatch = useWatch
const formZodResolver = zodResolver

export {
    useForm,
    useFormField,
    useFormArray,
    useFormController,
    useFormWatch,
    useFormState,
    useFormContext,
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
    FormSubmit,
    formZodResolver,
}
