// Type declarations for image imports (including Vite query params like `?width=...`)
// This allows TypeScript to accept imports such as: import img from './01.jpg?width=100'


// General catch-all for imports that include a query string (Vite image imports like '?width=100')
declare module '*?*' {
  const src: string;
  export default src;
}

// More explicit patterns to help the TS language server match typical image imports
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.webp' {
  const src: string;
  export default src;
}

// Sometimes the module specifier contains both extension and query, e.g. '01.jpg?width=1000'
// Add patterns that explicitly include the '?' to be extra-safe for some TS versions / plugins.
declare module '*jpg?*' {
  const src: string;
  export default src;
}
declare module '*png?*' {
  const src: string;
  export default src;
}
declare module '*webp?*' {
  const src: string;
  export default src;
}

// Explicitly match alias-based imports used in the project (e.g. '@/assets/images/12.jpg?width=1000')
declare module '@/assets/*' {
  const src: string;
  export default src;
}
declare module '@/assets/*?*' {
  const src: string;
  export default src;
}
declare module '@/assets/images/*' {
  const src: string;
  export default src;
}
declare module '@/assets/images/*?*' {
  const src: string;
  export default src;
}

export {};

// Fallback: match any import (useful to silence exotic asset imports that TS can't infer)
declare module '*' {
  const src: any;
  export default src;
}
