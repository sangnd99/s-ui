import type { InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode
}

function Input({ children, ...others }: InputProps): ReactNode {
    return <input {...others}>{children}</input>
}

Input.displayName = 'Button'

export type { InputProps }
export { Input }
