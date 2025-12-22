import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

type FooterOpts = {
  links?: Record<string, string>
}

export default ((opts?: FooterOpts) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? {}
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div class="quartz-footer-links">
          {Object.entries(links).map(([label, href]) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor<FooterOpts>
