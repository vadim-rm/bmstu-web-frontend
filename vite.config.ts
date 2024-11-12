import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/bmstu-web-frontend",
    server: {
        port: 3000,
        host: "0.0.0.0",
        proxy: {
            "/api": {
                target: "http://192.168.41.135:8000",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, "/"),
            },
        },
    },
})