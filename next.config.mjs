/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['firebasestorage.googleapis.com'],
    },
    // Pages from the previous site, sent to their closest page in the redesign.
    async redirects() {
      return [
        { source: '/terms&conditions', destination: '/terms', permanent: true },
        { source: '/privacy-policy', destination: '/privacy', permanent: true },
        { source: '/pricing', destination: '/', permanent: true },
        { source: '/usecases', destination: '/#use-cases', permanent: true },
        { source: '/company', destination: '/', permanent: true },
        { source: '/support', destination: '/#faq', permanent: true },
        { source: '/login', destination: 'https://dashboard.trupulse.ai/login?redirect=%2F', permanent: false },
      ];
    },
  };

  export default nextConfig;
