/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const headers = [
      {
        key: "Content-Security-Policy",
        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;",
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "X-Frame-Options",
        value: "DENY",
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "X-XSS-Protection",
        value: "1; mode=block",
      },
    ];
    console.log("En-têtes de sécurité appliqués :", headers);
    return [{ source: "/(.*)", headers }];
  },
};

export default nextConfig;
