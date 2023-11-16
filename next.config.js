/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'storage.googleapis.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'media.autochek.africa',
            port: '',
          },
        ],
      },
}
