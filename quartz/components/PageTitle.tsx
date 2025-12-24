import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div>
      <h2 class={classNames(displayClass, "page-title")}>
        <a href={baseDir}>{title}</a>
      </h2>
      <div class="social-links">
        <a href="https://github.com/dinoskilol" title="GitHub" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c2.6-.4 5.6-1.3 5.6-7a5.7 5.7 0 0 0-1.5-4 5.7 5.7 0 0 0-.1-4s-1.6-.5-5.2 2c-1.5-.4-3.1-.4-4.6 0-3.6-2.5-5.2-2-5.2-2a5.7 5.7 0 0 0-.1 4 5.7 5.7 0 0 0-1.5 4c0 5.7 3 6.6 5.6 7a4.8 4.8 0 0 0-1 3.5v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>
        <a href="https://x.com/dinoskilol" title="X" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2s9 5 20 0a9.5 9.5 0 0 0-9-5.6"></path>
          </svg>
        </a>
        <a href="https://instagram.com/dinoskilol" title="Instagram" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37"></path>
            <circle cx="17.5" cy="6.5" r="1.5"></circle>
          </svg>
        </a>
        <a href="https://youtube.com/@dinoskilol" title="YouTube" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
            <polygon points="10 15 15 12 10 9 10 15"></polygon>
          </svg>
        </a>
      </div>
    </div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.social-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
  justify-content: flex-end;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #6d28d9;
  transition: color 0.2s;
  line-height: 1;
}

.social-links a:hover {
  color: #7c3aed;
}

.social-links svg {
  width: 24px;
  height: 24px;
}

@media (prefers-color-scheme: dark) {
  .social-links a {
    color: #a78bfa;
  }

  .social-links a:hover {
    color: #c4b5fd;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
