import React from 'react'
import ReactMarkdown, { type Options } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Input } from '../input'

export function Markdown({ children, ...options }: Options) {
    return (
        <ReactMarkdown
            {...options}
            remarkPlugins={[remarkGfm, ...(options.remarkPlugins || [])]}
            components={{
                h1: ({ node, ...props }) => (
                    <h1 {...props} className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" />
                ),
                h2: ({ node, ...props }) => (
                    <h2
                        {...props}
                        className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
                    />
                ),
                h3: ({ node, ...props }) => (
                    <h3 {...props} className="scroll-m-20 text-2xl font-semibold tracking-tight" />
                ),
                h4: ({ node, ...props }) => (
                    <h4 {...props} className="scroll-m-20 text-xl font-semibold tracking-tight" />
                ),
                a: ({ node, ...props }) => (
                    <a
                        {...props}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline break-all"
                    />
                ),
                p: ({ node, ...props }) => <p {...props} className="leading-7 [&:not(:first-child)]:mt-6 break-all" />,
                ul: ({ node, ...props }) => <ul {...props} className="my-6 ml-6 list-disc [&>li]:mt-2" />,
                ol: ({ node, ...props }) => <ol {...props} className="my-6 ml-6 list-decimal [&>li]:mt-2" />,
                li: ({ node, ...props }) => <li {...props} className="break-all" />,
                pre: ({ node, ...props }) => (
                    <pre {...props} className="relative rounded-lg bg-muted p-4 font-mono text-sm overflow-auto mt-2" />
                ),
                code: ({ node, ...props }) => (
                    <code {...props} className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono" />
                ),
                hr: ({ node, ...props }) => (
                    <hr {...props} className="my-4 border-t border-muted dark:border-gray-700" />
                ),
                blockquote: ({ node, ...props }) => <blockquote {...props} className="mt-6 border-l-2 pl-6 italic" />,
                em: ({ node, ...props }) => <span {...props} className="italic" />,
                strong: ({ node, ...props }) => <span {...props} className="font-semibold" />,
                i: ({ node, ...props }) => <span {...props} className="italic" />,
                b: ({ node, ...props }) => <span {...props} className="font-semibold" />,
                table: ({ node, ...props }) => <table {...props} className="w-full text-sm" />,
                thead: ({ node, ...props }) => <thead {...props} className="[&_tr]:border-b" />,
                tbody: ({ node, ...props }) => <tbody {...props} className="[&_tr:last-child]:border-0" />,
                tr: ({ node, ...props }) => (
                    <tr
                        {...props}
                        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                    />
                ),
                th: ({ node, ...props }) => (
                    <th
                        {...props}
                        className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"
                    />
                ),
                td: ({ node, ...props }) => (
                    <td {...props} className="p-4 align-middle [&:has([role=checkbox])]:pr-0" />
                ),
                input: ({ node, ...props }) => (
                    <Input {...props} className="w-4 h-4 inline-block pr-2" type="checkbox" />
                ),
                ...options.components,
            }}
        >
            {children}
        </ReactMarkdown>
    )
}
Markdown.displayName = 'Markdown'
