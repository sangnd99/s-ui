import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@s-ui/react/Button'

const meta: Meta<typeof Button> = {
    title: 'Components / Button',
    component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    args: {
        onClick: () => alert('Hello world'),
        children: 'Hello',
        type: 'button',
    },
}
