// Lightweight module shims to allow bundling React-based client islands
// inside Quartz (which uses Preact for TSX).

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
