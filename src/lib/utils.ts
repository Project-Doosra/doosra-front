export function getBaseUrl() {
    if (typeof window !== 'undefined') {
        return ''; // Browser should use relative path
    }
    // console.log({NODE_ENV: process.env.NODE_ENV});
    if (process.env.NODE_ENV != "development") {
        return `https://doosra-frontend.vercel.app/`; // TODO: FIX THIS
    }
    if (process.env.RENDER_INTERNAL_HOSTNAME) {
        return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
    }
    return `http://localhost:${process.env.PORT || 3000}`;
}