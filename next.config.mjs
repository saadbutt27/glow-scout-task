/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dlmeuxeum/image/upload/**',
          },
        ],
      },
};

// module.exports = {
//     images: {
//         domains: ['res.cloudinary.com'],
//     },
// };

export default nextConfig;
