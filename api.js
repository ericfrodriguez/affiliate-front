let api = import.meta.env.VITE_API_DEV;

if (process.env.NODE_ENV==='production') {
    api = import.meta.env.VITE_API_PROD;
}

export default api;
