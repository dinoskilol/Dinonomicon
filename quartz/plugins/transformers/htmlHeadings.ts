import { QuartzTransformerPlugin } from "../types"
import { Root, Html } from "mdast"
import { visit, SKIP } from "unist-util-visit"

// Converts raw HTML heading blocks (e.g. <h1>Title</h1>) in mdast `html`
// nodes into proper mdast `heading` nodes so downstream transformers
// (like the TableOfContents plugin) will detect them.
export const HtmlHeadings: QuartzTransformerPlugin = () => {
  return {
    name: "HtmlHeadings",
    markdownPlugins() {
      return [
        () => {
          return (tree: Root) => {
            const headingRegex = /^\s*<h([1-6])(?:\s+([^>]*?))?>([\s\S]*?)<\/h\1>\s*$/i

            visit(tree, "html", (node: Html, index, parent) => {
              if (!parent || index == null) return
              const value = node.value as string
              const m = headingRegex.exec(value)
              if (!m) return

              const level = Number(m[1])
              const attrs = m[2] ?? ""
              // strip inner HTML tags for a plain text heading label
              const inner = m[3].replace(/<[^>]+>/g, "").trim()

              // try to extract an explicit id attribute if present
              let id: string | undefined
              const idMatch = attrs.match(/id\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))/i)
              if (idMatch) {
                id = idMatch[1] ?? idMatch[2] ?? idMatch[3]
              }

              const headingNode: any = {
                type: "heading",
                depth: Math.min(Math.max(level, 1), 6),
                children: [{ type: "text", value: inner }],
              }

              if (id) {
                headingNode.data = { hProperties: { id } }
              }

              parent.children.splice(index, 1, headingNode)
              return SKIP
            })
          }
        },
      ]
    },
  }
}

export default HtmlHeadings
