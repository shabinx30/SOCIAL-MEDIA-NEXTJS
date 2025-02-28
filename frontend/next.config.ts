import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
}
 
export default nextConfig