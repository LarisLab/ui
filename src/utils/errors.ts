import * as React from 'react'
import { useUiConfig } from '../components/provider'

export function useAsyncEventHandler<T>(handler?: (event: T) => void | Promise<void>) {
    const { errorHandler } = useUiConfig()
    const [loading, setLoading] = React.useState(false)

    return {
        loading,
        handler(event: T) {
            if (handler) {
                const result = handler(event)

                if (typeof result === 'object' && result && 'then' in result && 'catch' in result) {
                    setLoading(true)
                    result
                        .then(() => setLoading(false))
                        .catch((error) => {
                            errorHandler(error instanceof Error ? error : new Error(String(error)))
                            setLoading(false)
                        })
                }
            }
        },
    }
}
