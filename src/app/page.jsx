"use client";
// import { use, useState } from "react";
// export default function Home() {
//   const [info, setInfo] = useState(true);
//   const [jobs, setJobs] = useState([]);
//   const [value, setValue] = useState(0);
//   return (
//     <div className="text-black flex justify-center">
//       <h1>tabs project</h1>
//     </div>
//   );
// }
// const data = [
//   {
//     id: 1,
//     name: "TOMMY",
//     job: "Full Stack Web Devleoper",
//     dates: "December 2015-Present",
//     duties: [
//       "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
//       "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
//       "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
//     ],
//     company: "TOMMY",
//   },
//   {
//     id: 2,
//     name: "BIGDROP",
//     job: "Full Stack Web Devleoper",
//     dates: "December 2015-Present",
//     duties: [
//       "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
//       "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
//       "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
//     ],
//     company: "BIGDROP",
//   },
//   {
//     id: 1,
//     name: "CUKER",
//     job: "Full Stack Web Devleoper",
//     dates: "December 2015-Present",
//     duties: [
//       "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
//       "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
//       "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
//     ],
//     company: "CUKER",
//   },
// ];
// import { useState } from "react";

// export default function Home() {
//   const [value, setValue] = useState(0);

//   const data = [
//     {
//       id: 1,
//       name: "BARUUN SALAANII BULEE BALDAN",
//       job: "Full Stack Web Developer",
//       dates: "May 2015 - Present",
//       duties: [
//         "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
//         "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
//         "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
//       ],
//       company: "BALDAN",
//     },
//     {
//       id: 2,

//       name: "NATURIIN BUMBURIIN NURGEEN DANNY",
//       job: "Mongoliin Buh Ohinii Geriin Haygiig Utasnii Dugaartai Hadgalah Web Buteeh",
//       dates: "April 2007 - Present",
//       duties: [
//         "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
//         "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
//         "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
//       ],
//       company: "DANNY",
//     },
//     {
//       id: 3,
//       name: "OFFICCERIIN OHIN-TENGER MUNKHJIN",
//       job: "72r Hothonii Hot Ohinii Statusaa Hadgalah",
//       dates: "October 2007 - Present",
//       duties: [
//         "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
//         "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
//         "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
//       ],
//       company: "MUNKHJIN",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
//       <div className="max-w-6xl w-full">
//         <div className="flex gap-12">
//           {/* LEFT BUTTONS */}
//           <div className="flex flex-col gap-4 min-w-[200px]">
//             {data.map((item, index) => (
//               <button
//                 key={item.id}
//                 onClick={() => setValue(index)}
//                 className={`text-left px-6 py-3 text-sm font-medium tracking-wider transition-all ${
//                   value === index
//                     ? "text-[#14b8a6] border-l-2 border-[#14b8a6]"
//                     : "text-gray-600 border-l-2 border-transparent hover:text-[#14b8a6] hover:border-[#14b8a6]"
//                 }`}
//               >
//                 {item.name}
//               </button>
//             ))}
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="flex-1">
//             <h2 className="text-3xl font-normal text-gray-800 mb-2">
//               {data[value].job}
//             </h2>

//             <div className="inline-block bg-cyan-100 text-cyan-600 px-3 py-1 rounded text-sm font-medium mb-2">
//               {data[value].company}
//             </div>

//             <p className="text-gray-500 text-sm mb-8">{data[value].dates}</p>

//             <div className="space-y-6">
//               {data[value].duties.map((duty, index) => (
//                 <div key={index} className="flex gap-4">
//                   <span className="text-[#14b8a6] text-xl mt-1">»</span>
//                   <p className="text-gray-700 leading-relaxed flex-1">{duty}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [value, setValue] = useState(0);
  const drumSoundRef = useRef(null); // For second button (index 1)
  const hSoundRef = useRef(null); // For third button (index 2)

  useEffect(() => {
    // Load both audio files
    drumSoundRef.current = new Audio("/drum.mp3");
    drumSoundRef.current.preload = "auto";

    hSoundRef.current = new Audio("/h.mp3");
    hSoundRef.current.preload = "auto";

    return () => {
      if (drumSoundRef.current) {
        drumSoundRef.current.pause();
        drumSoundRef.current = null;
      }
      if (hSoundRef.current) {
        hSoundRef.current.pause();
        hSoundRef.current = null;
      }
    };
  }, []);

  const handleButtonClick = (index) => {
    // Play drum sound for second button (index 1)
    if (index === 1 && drumSoundRef.current) {
      drumSoundRef.current.currentTime = 0;
      drumSoundRef.current.play().catch((e) => {
        console.log("Drum sound failed:", e);
      });
    }

    // Play h sound for third button (index 2)
    if (index === 2 && hSoundRef.current) {
      hSoundRef.current.currentTime = 0;
      hSoundRef.current.play().catch((e) => {
        console.log("H sound failed:", e);
      });
    }

    setValue(index);
  };

  const data = [
    {
      id: 1,
      name: "BARUUN SALAANII BULEE BALDAN",
      job: "Full Stack Web Developer",
      dates: "May 2015 - Present",
      duties: [
        "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
        "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
        "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
      ],
      company: "BALDAN",
    },
    {
      id: 2,
      name: "NATURIIN BUMBURIIN NURGEEN DANNY",
      job: "Mongoliin Buh Ohinii Geriin Haygiig Utasnii Dugaartai Hadgalah Web Buteeh",
      dates: "April 2007 - Present",
      duties: [
        "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
        "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
        "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
      ],
      company: "DANNY",
    },
    {
      id: 3,
      name: "OFFICCERIIN OHIN-TENGER MUNKHJIN",
      job: "72r Hothonii Hot Ohinii Statusaa Hadgalah",
      dates: "October 2007 - Present",
      duties: [
        "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
        "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
        "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
      ],
      company: "MUNKHJIN",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="flex gap-12">
          {/* LEFT BUTTONS */}
          <div className="flex flex-col gap-4 min-w-[200px]">
            {data.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleButtonClick(index)}
                className={`text-left px-6 py-3 text-sm font-medium tracking-wider transition-all ${
                  value === index
                    ? "text-[#14b8a6] border-l-2 border-[#14b8a6]"
                    : "text-gray-600 border-l-2 border-transparent hover:text-[#14b8a6] hover:border-[#14b8a6]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT - remains the same */}
          {/* ... */}
          <div className="flex-1">
            <h2 className="text-3xl font-normal text-gray-800 mb-2">
              {data[value].job}
            </h2>

            <div className="inline-block bg-cyan-100 text-cyan-600 px-3 py-1 rounded text-sm font-medium mb-2">
              {data[value].company}
            </div>

            <p className="text-gray-500 text-sm mb-8">{data[value].dates}</p>

            <div className="space-y-6">
              {data[value].duties.map((duty, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-[#14b8a6] text-xl mt-1">»</span>
                  <p className="text-gray-700 leading-relaxed flex-1">{duty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
