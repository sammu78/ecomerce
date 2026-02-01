// Configuration for API URL.
// Since frontend is served from the same server as backend, we can use relative URLs in production
// In development (Vite), import.meta.env.VITE_API_URL can be set in .env.

export const API_URL = import.meta.env.VITE_API_URL || "";
