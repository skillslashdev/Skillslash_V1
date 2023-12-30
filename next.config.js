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
      // {
      //   source: "/blog/ai-and-machine-learning",
      //   destination:
      //     "/blog/Data-Science-Vs-Artificial-Intelligence-What's-the-Difference",
      //   permanent: true,
      // },
      // {
      //   source: "/blog/block-chain",
      //   destination: "/blog/category/block-chain",
      //   permanent: true,
      // },
      // {
      //   source: "/blog/business-analytics",
      //   destination: "/blog/category/business-analytics",
      //   permanent: true,
      // },
      // {
      //   source: "/blog/career",
      //   destination: "/blog/category/career",
      //   permanent: true,
      // },
      // {
      //   source: "/blog/cyber-security",
      //   destination: "/blog/category/cyber-security",
      //   permanent: true,
      // },
      // {
      //   source: "/blog/data-science",
      //   destination:
      //     "/blog/Data-Science-Vs-Artificial-Intelligence-What's-the-Difference",
      //   permanent: true,
      // },
      // {
      //   source: "/blog/full-stack",
      //   destination: "/full-stack-development-course",
      //   permanent: true,
      // },
      // {
      //   source: "/blog/iot",
      //   destination: "/blog/IoT-Technology",
      //   permanent: true,
      // },
      // {
      //   source: "/data-science-course-in-indore",
      //   destination: "/data-science-course-in-Indore",
      //   permanent: true,
      // },
      // {
      //   source: "/data-structures-&-algorithm-system-design",
      //   destination: "/system-design-course",
      //   permanent: true,
      // },
      // {
      //   source: "/data-structures-algorithms-course",
      //   destination: "/data-structures-course",
      //   permanent: true,
      // },
      // {
      //   source: "/web-development-course-in-Kolkata",
      //   destination: "/web-development-course-in-kolkata",
      //   permanent: true,
      // },
      // {
      //   source: "https://blog.skillslash.com/",
      //   destination: "https://skillslash.com/blog",
      //   permanent: true,
      // },
      // {
      //   source: "https://blog.skillslash.com/",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source: "https://blog.skillslash.com/",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source: "https://blog.skillslash.com/",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/5-Healthcare-Data-Science-Real-Time-Projects-To-Get-You-Hired-in-2023",
      //   destination:
      //     "/blog/5-Healthcare-Data-Science-Real-Time-Projects-To-Get-You-Hired-in-2023",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "/blog/5-Healthcare-Data-Science-Real-Time-Projects-To-Get-You-Hired-in-2023",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "/blog/5-Healthcare-Data-Science-Real-Time-Projects-To-Get-You-Hired-in-2023",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "/blog/5-Healthcare-Data-Science-Real-Time-Projects-To-Get-You-Hired-in-2023",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "/blog/5-Healthcare-Data-Science-Real-Time-Projects-To-Get-You-Hired-in-2023",
      //   destination:
      //     "https://skillslash.com/full-stack-web-development-in-bangalore",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/5-ways-data-science-is-transforming-the-fashion-industry",
      //   destination:
      //     "/blog/5-ways-data-science-is-transforming-the-fashion-industry",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "/blog/5-ways-data-science-is-transforming-the-fashion-industry",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "/blog/5-ways-data-science-is-transforming-the-fashion-industry",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "/blog/5-ways-data-science-is-transforming-the-fashion-industry",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/An-Overview-of-Common-Data-Structures -Arrays-Linked-lists-and-Trees",
      //   destination:
      //     "/blog/An-Overview-of-Common-Data-Structures -Arrays-Linked-lists-and-Trees",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "/blog/An-Overview-of-Common-Data-Structures -Arrays-Linked-lists-and-Trees",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "/blog/An-Overview-of-Common-Data-Structures -Arrays-Linked-lists-and-Trees",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "/blog/An-Overview-of-Common-Data-Structures -Arrays-Linked-lists-and-Trees",
      //   destination: "https://skillslash.com/blog",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "/blog/An-Overview-of-Common-Data-Structures -Arrays-Linked-lists-and-Trees",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/Fibonacci-Hashing-and-Fastest-Hashtable",
      //   destination:
      //     "https://skillslash.com/blog/Fibonacci-Hashing-and-Fastest-Hashtable",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Fibonacci-Hashing-and-Fastest-Hashtable",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Fibonacci-Hashing-and-Fastest-Hashtable",
      //   destination: "https://skillslash.com/blog",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Fibonacci-Hashing-and-Fastest-Hashtable",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Fibonacci-Hashing-and-Fastest-Hashtable",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source: "https://blog.skillslash.com/Hotel-Booking-Application-Design",
      //   destination:
      //     "https://skillslash.com/blog/Hotel-Booking-Application-Design",
      //   permanent: true,
      // },
      // {
      //   source: "https://skillslash.com/blog/Hotel-Booking-Application-Design",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source: "https://skillslash.com/blog/Hotel-Booking-Application-Design",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source: "https://skillslash.com/blog/Hotel-Booking-Application-Design",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source: "https://skillslash.com/blog/Hotel-Booking-Application-Design",
      //   destination: "https://skillslash.com/blog",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/How-to-create-a-word-search-application",
      //   destination:
      //     "https://skillslash.com/blog/How-to-create-a-word-search-application",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/How-to-create-a-word-search-application",
      //   destination: "https://skillslash.com/blog",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/How-to-create-a-word-search-application",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/How-to-create-a-word-search-application",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/How-to-create-a-word-search-application",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/Python-for-Data-Science-8-Concepts-You-May-Have-Forgotten",
      //   destination:
      //     "https://skillslash.com/blog/Python-for-Data-Science-8-Concepts-You-May-Have-Forgotten",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Python-for-Data-Science-8-Concepts-You-May-Have-Forgotten",
      //   destination: "https://skillslash.com/blog",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Python-for-Data-Science-8-Concepts-You-May-Have-Forgotten",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Python-for-Data-Science-8-Concepts-You-May-Have-Forgotten",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Python-for-Data-Science-8-Concepts-You-May-Have-Forgotten",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/Role-of-a-Data-Scientist-in-BFSI-Sector-in-2023",
      //   destination:
      //     "https://skillslash.com/blog/Role-of-a-Data-Scientist-in-BFSI-Sector-in-2023",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Role-of-a-Data-Scientist-in-BFSI-Sector-in-2023",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Role-of-a-Data-Scientist-in-BFSI-Sector-in-2023",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Role-of-a-Data-Scientist-in-BFSI-Sector-in-2023",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Role-of-a-Data-Scientist-in-BFSI-Sector-in-2023",
      //   destination: "https://skillslash.com/blog",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/Statistical_Analysis_of_Cricket_Data",
      //   destination:
      //     "https://skillslash.com/blog/Statistical_Analysis_of_Cricket_Data",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Statistical_Analysis_of_Cricket_Data",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Statistical_Analysis_of_Cricket_Data",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Statistical_Analysis_of_Cricket_Data",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Statistical_Analysis_of_Cricket_Data",
      //   destination: "https://skillslash.com/blog",
      //   permanent: true,
      // },
      // {
      //   source: "https://blog.skillslash.com/Statistical_modeling",
      //   destination: "https://skillslash.com/blog/Statistical_modeling",
      //   permanent: true,
      // },
      // {
      //   source: "https://skillslash.com/blog/Statistical_modeling",
      //   destination: "https://skillslash.com/blog",
      //   permanent: true,
      // },
      // {
      //   source: "https://skillslash.com/blog/Statistical_modeling",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source: "https://skillslash.com/blog/Statistical_modeling",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source: "https://skillslash.com/blog/Statistical_modeling",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/Top-place-to-learn-data-science-course-in-India",
      //   destination:
      //     "https://skillslash.com/blog/Top-place-to-learn-data-science-course-in-India",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Top-place-to-learn-data-science-course-in-India",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Top-place-to-learn-data-science-course-in-India",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Top-place-to-learn-data-science-course-in-India",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/Top-place-to-learn-data-science-course-in-India",
      //   destination: "https://skillslash.com/blog",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/a-day-in-the-life-of-a-data-science-professional",
      //   destination:
      //     "https://skillslash.com/blog/a-day-in-the-life-of-a-data-science-professional",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/a-day-in-the-life-of-a-data-science-professional",
      //   destination: "https://skillslash.com/blog",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/a-day-in-the-life-of-a-data-science-professional",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/a-day-in-the-life-of-a-data-science-professional",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/a-day-in-the-life-of-a-data-science-professional",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/best-data-science-course-in-bangalore",
      //   destination:
      //     "https://skillslash.com/blog/best-data-science-course-in-bangalore",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/best-data-science-course-in-bangalore",
      //   destination: "https://skillslash.com/blog",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/best-data-science-course-in-bangalore",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/best-data-science-course-in-bangalore",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/best-data-science-course-in-bangalore",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/big-data-case-study-what-makes-spotify-successful",
      //   destination:
      //     "https://skillslash.com/blog/big-data-case-study-what-makes-spotify-successful",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/big-data-case-study-what-makes-spotify-successful",
      //   destination: "https://skillslash.com/blog",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/big-data-case-study-what-makes-spotify-successful",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/big-data-case-study-what-makes-spotify-successful",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/big-data-case-study-what-makes-spotify-successful",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source: "https://blog.skillslash.com/chatGPT-bradAI-data-science",
      //   destination: "https://skillslash.com/blog/chatGPT-bradAI-data-science",
      //   permanent: true,
      // },
      // {
      //   source: "https://skillslash.com/blog/chatGPT-bradAI-data-science",
      //   destination: "https://skillslash.com/blog",
      //   permanent: true,
      // },
      // {
      //   source: "https://skillslash.com/blog/chatGPT-bradAI-data-science",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source: "https://skillslash.com/blog/chatGPT-bradAI-data-science",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source: "https://skillslash.com/blog/chatGPT-bradAI-data-science",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://blog.skillslash.com/college-enquiry-chat-bot-with-data-science",
      //   destination:
      //     "https://skillslash.com/blog/college-enquiry-chat-bot-with-data-science",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/college-enquiry-chat-bot-with-data-science",
      //   destination: "https://skillslash.com/blog",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/college-enquiry-chat-bot-with-data-science",
      //   destination: "https://skillslash.com/About",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/college-enquiry-chat-bot-with-data-science",
      //   destination: "https://skillslash.com/Contact-us",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "https://skillslash.com/blog/college-enquiry-chat-bot-with-data-science",
      //   destination: "https://skillslash.com/event",
      //   permanent: true,
      // },
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
