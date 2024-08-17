/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const apiHost = process.env.API_HOST || "localhost";
    return [
      {
        source: "/:path*",
        destination: `http://${apiHost}:8080/:path*`,
      },
    ];
  },
};

export default nextConfig;
