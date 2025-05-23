import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Markdown } from '.'

const meta = {
    title: 'Components/Markdown',
    component: Markdown,
    render: (args) => (
        <div>
            <Markdown {...args}>
                {`# Hello world
This is a paragraph with a [link](https://example.com) and some *italic* and **bold** text.

It has www.example.com, https://example.com, and contact@example.com.

## This is a heading

This is a code block:

\`\`\`javascript
console.log('Hello, world!');
\`\`\`

This is a list:
- Item 1
- Item 2
- Item 3

This is a blockquote:

> This is a blockquote.

This is a horizontal rule:

---
This is a table:
| Header 1 | Header 2 |
|----------|----------|
| Row 1    | Row 2    |
| Row 3    | Row 4    |

This is an image:
![Alt text](https://via.placeholder.com/150 "Image Title")

This is a checkbox:

* [ ] to do
* [x] done

This is random HTML:
<div className="flex items-center space-x-2">
    <Checkbox id="terms" />
    <Label htmlFor="terms">
        Accept terms and conditions
    </Label>
</div>`}
            </Markdown>
        </div>
    ),
} satisfies Meta<typeof Markdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: '',
    },
}
