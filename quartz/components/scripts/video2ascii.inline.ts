import React from "react"
import { createRoot } from "react-dom/client"
import Video2Ascii from "video2ascii"

function parseBoolean(value: string | undefined, fallback: boolean): boolean {
  if (value == null) return fallback
  const lower = value.toLowerCase().trim()
  if (["true", "1", "yes", "y", "on"].includes(lower)) return true
  if (["false", "0", "no", "n", "off"].includes(lower)) return false
  return fallback
}

function parseNumber(value: string | undefined, fallback: number): number {
  if (value == null || value.trim() === "") return fallback
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

function forceMuteVideo(root: HTMLElement) {
  const videos = root.querySelectorAll<HTMLVideoElement>("video")
  videos.forEach((video) => {
    try {
      if (!video.muted) video.muted = true
      if (video.volume !== 0) video.volume = 0
      if (!video.defaultMuted) video.defaultMuted = true

      // Only set attributes if missing to avoid MutationObserver feedback loops.
      if (!video.hasAttribute("muted")) video.setAttribute("muted", "")
      if (!video.hasAttribute("playsinline")) video.setAttribute("playsinline", "")
      if (!video.hasAttribute("webkit-playsinline")) video.setAttribute("webkit-playsinline", "")
    } catch {
      // ignore
    }
  })
}

function setupVideo2Ascii(el: HTMLElement) {
  if (el.dataset.video2asciiMounted === "true") return
  el.dataset.video2asciiMounted = "true"

  const src = el.dataset.video2asciiSrc
  if (!src) return

  const props = {
    src,
    numColumns: parseNumber(el.dataset.video2asciiNumColumns, 60),
    colored: parseBoolean(el.dataset.video2asciiColored, true),
    brightness: parseNumber(el.dataset.video2asciiBrightness, 1.15),
    audioEffect: parseNumber(el.dataset.video2asciiAudioEffect, 0),
    enableMouse: parseBoolean(el.dataset.video2asciiEnableMouse, true),
    enableRipple: parseBoolean(el.dataset.video2asciiEnableRipple, true),
    charset: el.dataset.video2asciiCharset ?? "blocks",
    isPlaying: parseBoolean(el.dataset.video2asciiIsPlaying, true),
    autoPlay: parseBoolean(el.dataset.video2asciiAutoPlay, true),
  }

  let root: any
  let observer: MutationObserver | undefined
  try {
    root = createRoot(el)
    root.render(React.createElement(Video2Ascii as any, props as any))

    // Ensure there's no audio even if the library renders/rewrites the <video> later.
    forceMuteVideo(el)
    observer = new MutationObserver(() => forceMuteVideo(el))
    // Observe DOM additions only. Observing attributes can cause feedback loops.
    observer.observe(el, { subtree: true, childList: true })
  } catch {
    // If something goes wrong, don't break the page.
  }

  if (root) {
    window.addCleanup(() => {
      try {
        observer?.disconnect()
        root?.unmount()
      } catch {
        // ignore
      }
    })
  }
}

document.addEventListener("nav", () => {
  document
    .querySelectorAll<HTMLElement>(".video2ascii[data-video2ascii-src]")
    .forEach(setupVideo2Ascii)
})
