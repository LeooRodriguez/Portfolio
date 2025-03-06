/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Exporta el proyecto como estático
  distDir: 'out', // Carpeta de salida para GitHub Pages
  images: {
    unoptimized: true, // Evita problemas con la optimización de imágenes
  },
  basePath: "/LeooRodriguez.github.io", // Reemplaza con el nombre de tu repo
  assetPrefix: "/LeooRodriguez.github.io/",
};

module.exports = nextConfig;