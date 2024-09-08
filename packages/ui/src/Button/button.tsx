import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

function Button({ children, ...others }: ButtonProps): React.ReactNode | null {
    return (
        <button type="button" {...others}>
            {children}
        </button>
    )
}

Button.displayName = 'Button'

export type { ButtonProps }
export { Button }
