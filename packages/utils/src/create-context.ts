import { createContext as createReactContext, useContext as useReactContext } from 'react'

interface CreateContextOptions<T> {
    strict?: boolean
    provideName?: string
    hookName?: string
    name?: string
    defaultValues?: T
}

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>]

function getContextErrorMsg(hook: string, provider: string) {
    return `${hook} returned \'undefined\'. Seems you forgot to wrap component within ${provider}`
}

export function createContext<T>(options: CreateContextOptions<T>) {
    const { name, strict = true, hookName = 'useContext', provideName = 'Provider', defaultValues } = options

    const Context = createReactContext<T | undefined>(defaultValues)

    Context.displayName = name

    function useContext() {
        const context = useReactContext(Context)
        if (!context && strict) {
            const error = new Error(getContextErrorMsg(hookName, provideName))
            error.name = 'ContextError'

            Error.captureStackTrace?.(error, useContext)

            throw Error
        }

        return context
    }

    return [Context.Provider, useContext, Context] as CreateContextReturn<T>
}
