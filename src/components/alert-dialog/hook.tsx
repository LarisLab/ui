import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogPortal,
    AlertDialogTitle,
} from './alert-dialog'

export function useAlertDialog({
    title,
    description,
    cancelAction,
    action,
}: {
    title: React.ReactNode
    description?: React.ReactNode
    cancelAction?: React.ComponentProps<typeof AlertDialogCancel>
    action?: React.ComponentProps<typeof AlertDialogAction>
}) {
    const [open, setOpen] = React.useState(false)

    return {
        open,
        setOpen,
        container: (
            <AlertDialog defaultOpen={false} open={open} onOpenChange={setOpen}>
                <AlertDialogPortal>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>{title}</AlertDialogTitle>
                            {description && <AlertDialogDescription>{description}</AlertDialogDescription>}
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel {...cancelAction} children={cancelAction?.children || 'Cancel'} />
                            <AlertDialogAction {...action} children={action?.children || 'Confirm'} />
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogPortal>
            </AlertDialog>
        ),
    }
}
