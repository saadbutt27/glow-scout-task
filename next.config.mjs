/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // added pattern(path for cloudinary.com, from where the images are saved)
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

export default nextConfig;
