/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Permite la exportación estática
  images: {
    unoptimized: true, // Necesario para exportar imágenes sin optimización en Vercel
  },
};

export default nextConfig;