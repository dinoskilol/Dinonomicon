import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/video2ascii.scss"

// @ts-ignore
import script from "./scripts/video2ascii.inline"
import { classNames } from "../util/lang"

type Video2AsciiFrontmatter =
  | boolean
  | string
  | {
      src?: unknown
      numColumns?: unknown
      colored?: unknown
      brightness?: unknown
      audioEffect?: unknown
      enableMouse?: unknown
      enableRipple?: unknown
      charset?: unknown
      isPlaying?: unknown
      autoPlay?: unknown
    }

function asString(value: unknown): string | undefined {
  if (typeof value === "string") {
    const trimmed = value.trim()
    return trimmed.length > 0 ? trimmed : undefined
  }
  return undefined
}

function asNumber(value: unknown, fallback: number): number {
  if (typeof value === "number" && Number.isFinite(value)) return value
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value)
    if (Number.isFinite(parsed)) return parsed
  }
  return fallback
}

function asBoolean(value: unknown, fallback: boolean): boolean {
  if (typeof value === "boolean") return value
  if (typeof value === "string") {
    const lower = value.toLowerCase().trim()
    if (["true", "1", "yes", "y", "on"].includes(lower)) return true
    if (["false", "0", "no", "n", "off"].includes(lower)) return false
  }
  return fallback
}

const defaults = {
  // Fewer columns => larger characters (more legible in the sidebar)
  numColumns: 60,
  colored: true,
  brightness: 1.15,
  // Disable audio-reactive effect by default (and we hard-mute video on the client)
  audioEffect: 0,
  enableMouse: true,
  enableRipple: true,
  charset: "blocks",
  isPlaying: true,
  autoPlay: true,
}

export default (() => {
  const Video2Ascii: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const raw = fileData.frontmatter?.video2ascii as Video2AsciiFrontmatter | undefined
    if (!raw) return null

    const src =
      typeof raw === "string"
        ? asString(raw)
        : typeof raw === "object"
          ? asString(raw.src)
          : undefined

    if (!src) return null

    const numColumns =
      typeof raw === "object" ? asNumber(raw.numColumns, defaults.numColumns) : defaults.numColumns
    const colored =
      typeof raw === "object" ? asBoolean(raw.colored, defaults.colored) : defaults.colored
    const brightness =
      typeof raw === "object" ? asNumber(raw.brightness, defaults.brightness) : defaults.brightness
    const audioEffect =
      typeof raw === "object"
        ? asNumber(raw.audioEffect, defaults.audioEffect)
        : defaults.audioEffect
    const enableMouse =
      typeof raw === "object"
        ? asBoolean(raw.enableMouse, defaults.enableMouse)
        : defaults.enableMouse
    const enableRipple =
      typeof raw === "object"
        ? asBoolean(raw.enableRipple, defaults.enableRipple)
        : defaults.enableRipple
    const charset =
      typeof raw === "object" ? (asString(raw.charset) ?? defaults.charset) : defaults.charset
    const isPlaying =
      typeof raw === "object" ? asBoolean(raw.isPlaying, defaults.isPlaying) : defaults.isPlaying
    const autoPlay =
      typeof raw === "object" ? asBoolean(raw.autoPlay, defaults.autoPlay) : defaults.autoPlay

    return (
      <div
        class={classNames(displayClass, "video2ascii")}
        data-video2ascii-src={src}
        data-video2ascii-num-columns={String(numColumns)}
        data-video2ascii-colored={String(colored)}
        data-video2ascii-brightness={String(brightness)}
        data-video2ascii-audio-effect={String(audioEffect)}
        data-video2ascii-enable-mouse={String(enableMouse)}
        data-video2ascii-enable-ripple={String(enableRipple)}
        data-video2ascii-charset={charset}
        data-video2ascii-is-playing={String(isPlaying)}
        data-video2ascii-auto-play={String(autoPlay)}
      />
    )
  }

  Video2Ascii.css = style
  Video2Ascii.afterDOMLoaded = script

  return Video2Ascii
}) satisfies QuartzComponentConstructor
