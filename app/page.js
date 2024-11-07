// import React from "react";
import Image from "next/image";
import img from "@/app/picofme.png";
import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
// const Profile = () => {
//   const profileInfo = {
//     name: "Mubarak Muse",
//     location: "Minneapolis, Minnesota, USA",
//     bioCards: [
//       {
//         title: `Brighter Tunnel`,
//         description: "software development company dedicated to crafting tailored solutions",
//         url: "https://BrighterTunnel.com",
//       },
//       {
//         title: `TaskFlow: Task Management`,
//         description:
//           "A unique way to organize your tasks using the Eisenhower matrix",
//         url: "/taskflow",
//       },
//       // {
//       //   title: `Tafseer Course`,
//       //   description:
//       //     "Tafseer classes for High School and Middle School Students",
//       //   url: "/tafseer",
//       // },
//       {
//         title: `Learn to Code in 55 Hours`,
//         description: "A comprehensive guide to learning how to code in just 55 hours.",
//         url: "/coding", // Assuming this is the route for the guide
//       },
//       {
//         title: `Resume`,
//         description: "A Digital Copy Of My Resume",
//         url: "/resume",
//       },
//     ],
//     socialLinks: [
//       {
//         title: "LinkedIn",
//         url: "https://www.linkedin.com/in/mubarak-muse/",
//       },
//       {
//         title: "Twitter",
//         url: "https://twitter.com/mubarakmuse_",
//       },
//       {
//         title: "Email",
//         url: "mailto:Mubarak014@gmail.com",
//       },
//       {
//         title: "GitHub",
//         url: "https://github.com/mubarakmuse",
//       },
//     ],
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
//         <div className="text-center p-8 border-b">
//           <Image
//             src={img}
//             alt="Profile Picture"
//             width={160}
//             height={160}
//             className="rounded-full mx-auto"
//           />
//           <h1 className="text-3xl font-semibold mt-4">{profileInfo.name}</h1>
//           <p className="text-gray-500">{profileInfo.location}</p>
//           <p className="text-gray-600 mt-2">{profileInfo.bio}</p>
//         </div>
//         <div className="p-4">
//           <div className="flex text-center justify-center space-x-4 mb-4">
//             {profileInfo.socialLinks.map((socialLink, index) => (
//               <a
//                 key={index}
//                 href={socialLink.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:text-blue-700 transition duration-200"
//               >
//                 {socialLink.title}
//               </a>
//             ))}
//           </div>
//           <div className="grid text-center grid-cols-1 md:grid-cols-2 gap-6">
//             {profileInfo.bioCards.map((card, index) => (
//               <div
//                 key={index}
//                 className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-md transition duration-300"
//               >
//                 <h2 className="text-xl font-semibold text-blue-800">
//                   {card.title}
//                 </h2>
//                 <p className="text-gray-700 mt-3">{card.description}</p>
//                 <a
//                   href={card.url}
//                   className="inline-block mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-200"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Explore
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        {/* <Problem /> */}
        {/* <FeaturesAccordion /> */}
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}