import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
/*
// @type {import('next').NextConfig} 
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

// Create the Next.js Intl plugin
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en',
                permanent: true,
            },
        ];
    },
};

// Wrap the nextConfig with the Intl plugin
export default withNextIntl(nextConfig);

*/