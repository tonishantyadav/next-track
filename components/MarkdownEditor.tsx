import '@uiw/react-markdown-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'

const BaseMarkdownEditor = dynamic(
  () => import('@uiw/react-markdown-editor').then((mod) => mod.default),
  { ssr: false }
)

const MarkdownEditor = ({
  onChange,
}: {
  onChange: (value: string) => void
}) => {
  return (
    <BaseMarkdownEditor
      placeholder="Describe the issue in detail"
      height="500px"
      onChange={onChange}
    />
  )
}

export default MarkdownEditor
