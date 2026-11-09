/** Static export: `npm run build` writes the whole site to ./out, ready for any static host. */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
