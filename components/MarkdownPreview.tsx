'use client'

import MarkdownEditor from '@uiw/react-markdown-editor'

const MarkdownPreview = ({ value }: { value: string }) => {
  return (
    <div>
      <MarkdownEditor.Markdown
        className="prose max-w-lg rounded-xl bg-gray-800/20 p-5 text-sm dark:prose-invert prose-a:text-blue-600 prose-img:rounded-xl"
        source={value}
        rehypeRewrite={(node: any, index, parent: any) => {
          if (
            node.tagName === 'a' &&
            parent &&
            /^h(1|2|3|4|5|6)/.test(parent.tagName)
          ) {
            parent.children = parent.children.slice(1)
          }
        }}
      />
    </div>
  )
}

export default MarkdownPreview
