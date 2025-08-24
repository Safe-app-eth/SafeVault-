const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "frame-ancestors https://safe.global https://*.safe.global;"
  },
  { key: 'X-Frame-Options', value: 'ALLOWALL' }
];

module.exports = {
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  }
};
