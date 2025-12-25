export declare global {
  interface Document {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void,
    ): void
    removeEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void,
    ): void
    dispatchEvent<K extends keyof CustomEventMap>(ev: CustomEventMap[K] | UIEvent): void
  }
  interface Window {
    spaNavigate(url: URL, isBack: boolean = false)
    addCleanup(fn: (...args: any[]) => void)
  }
}

// Minimal shims so we can bundle client-only React islands without
// introducing React's full type surface (Quartz uses Preact for TSX).
declare module "react" {
  const React: any
  export default React
}

declare module "react-dom/client" {
  export const createRoot: any
}

declare module "video2ascii" {
  const Video2Ascii: any
  export default Video2Ascii
}
