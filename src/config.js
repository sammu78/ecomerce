// Configuration for API URL.
// In development (Vite), import.meta.env.VITE_API_URL can be set in .env.
// If not set, it defaults to localhost:5000.
// In production, you should set VITE_API_URL in your hosting provider (e.g. Vercel/Netlify).

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
