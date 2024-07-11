/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/time",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
