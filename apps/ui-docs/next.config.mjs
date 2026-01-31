import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ['@kaotypr/ui'],
  output: 'export',
  reactStrictMode: true,
};

export default withMDX(config);
