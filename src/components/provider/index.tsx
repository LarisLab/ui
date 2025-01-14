import * as React from 'react'
import { createContext, useContext } from 'react'
import { toast, Toaster } from '../toast'

export interface UiConfig {
    errorHandler(error: Error): void
}

const defaultUiConfig: UiConfig = {
    errorHandler: (error) => {
        toast({
            title: formatError(error),
            variant: 'destructive',
        })
    },
}

const Context = createContext<UiConfig>(defaultUiConfig)

function formatError(error: Error) {
    if (
        error instanceof TypeError ||
        error instanceof SyntaxError ||
        error instanceof EvalError ||
        error instanceof RangeError ||
        error instanceof URIError ||
        error instanceof ReferenceError
    ) {
        console.error(error)
        return 'Something went wrong, please try again'
    } else if (error.message === 'Failed to fetch') {
        return 'Failed to connect to the server, please check your internet connection'
    } else if (error.message === 'All Promises rejected') {
        console.error(error)
        return 'Something went wrong, please try again'
    }

    return error.message
}

export function UiProvider({ children, ...config }: React.PropsWithChildren<{}> & Partial<UiConfig>) {
    return (
        <Context.Provider
            value={{
                ...defaultUiConfig,
                ...config,
            }}
        >
            <Toaster />
            {children}
        </Context.Provider>
    )
}

export function useUiConfig() {
    return useContext(Context)
}
