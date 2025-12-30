import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const SocialLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={`social-links ${displayClass ?? ""}`}>
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
      <a href="https://linkedin.com/in/your-profile" title="LinkedIn" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
      <a href="mailto:your-email@example.com" title="Email">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          <rect x="2" y="5" width="20" height="14" rx="2"></rect>
        </svg>
      </a>
      <a href="tel:+1234567890" title="Phone">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
    </div>
  )
}

SocialLinks.css = `
.social-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 0.1rem;
  margin-bottom: 0.5rem;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--secondary);
  transition: transform 0.2s, color 0.2s;
  line-height: 1;
}

.social-links a:hover {
  color: var(--tertiary);
  transform: scale(1.1);
}

.social-links svg {
  width: 20px;
  height: 20px;
}
`

export default (() => SocialLinks) satisfies QuartzComponentConstructor
