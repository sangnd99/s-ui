import { useEffect, useState } from 'react'
import { useIsomorphicEffect } from '../use-isomorphic-effect'

let serverHandoffComplete = false
let count = 0
function genId() {
    return `s-ui-${Math.random().toString(36).slice(2, 6)}${count++}`
}

function useId() {
    const [id, setId] = useState(serverHandoffComplete ? genId() : undefined)

    useIsomorphicEffect(() => {
        if (!id) {
            setId(genId())
        }
    }, [])

    useEffect(() => {
        serverHandoffComplete = true
    }, [])

    return id
}

export { useId }
