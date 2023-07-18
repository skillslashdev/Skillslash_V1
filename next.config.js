/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/ai-and-ml-program",
        destination:
          "/advanced-data-science-and-ai-course-with-real-work-experience",
        permanent: true,
      },
      {
        source: "/data-science-course-in-kolkata",
        destination: "/data-science-course-training-kolkata",
        permanent: true,
      },
      {
        source: "/data-science-course-in-hyderabad",
        destination: "/data-science-course-training-hyderabad",
        permanent: true,
      },
    ];
  },

  images: {
    domains: ["skillslash-cdn.s3.ap-south-1.amazonaws.com"],
    minimumCacheTTL: 120,
  },
};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
// module.exports = withBundleAnalyzer(nextConfig);
// export async function redirects() {
//   return [
//     {
//       source: "/ai-and-ml-program",
//       destination:
//         "/advanced-data-science-and-ai-course-with-real-work-experience",
//       permanent: true,
//     },
//     {
//       source: "/data-science-course-in-kolkata",
//       destination: "/data-science-course-training-kolkata",
//       permanent: true,
//     },
//     {
//       source: "/data-science-course-in-hyderabad",
//       destination: "/data-science-course-training-hyderabad",
//       permanent: true,
//     },
//   ];
// }
module.exports = nextConfig;
