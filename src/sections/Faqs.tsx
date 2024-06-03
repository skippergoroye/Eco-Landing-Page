// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import QuestionMark from "../assets/SVG/question-marks.svg";
// import { FAQs } from "../constants";

// export default function Faqs() {
//   const [selected, setSelected] = useState<number | null>(null);

//   const togglerFunction = (index: number) => {
//     if (selected === index) {
//       setSelected(null);
//     } else {
//       setSelected(index);
//     }
//   };

//   return (
//     <section className="flex items-center justify-center mt-40 mx-auto max-w-[1440px] px-8 lg:px-16">
//       <div className="flex flex-col px-8">
//         <div className="flex relative">
//           <div className="bg-[#495961] p-3 lg:w-[1100px] text-center text-white text-[32px] font-medium font-montserrat">
//             Frequently Asked Questions (FAQs)
//           </div>
//           <img
//             src={QuestionMark}
//             alt="question-mark"
//             className="absolute right-10 top-2"
//             width={85}
//           />
//         </div>
//         <div className="h-max flex flex-col mt-10 gap-4 ">
//           {FAQs.map((item, index) => (
//             <div className="border  border-[#495961] rounded-lg w-[1100px] px-4">
//               <div onClick={() => togglerFunction(index)} className="px-5 py-4 flex items-center justify-between">
//                 <p className="flex-1">{item.title}</p>
//                 <p>
//                   {selected === index ? <ChevronUp /> : <ChevronDown />}
//                 </p>
//               </div>
//               {selected === index && (
//                 <div className="mt-2">
//                   <ul className="list-disc pl-5 border-t border-[#495961]">
//                     {item.content.map((contentItem, i) => (
//                       <li key={i}>{contentItem}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import QuestionMark from "../assets/SVG/question-marks.svg";
import { FAQs } from "../constants";

export default function Faqs() {
  const [selected, setSelected] = useState<number | null>(null);

  const togglerFunction = (index: number) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <section className="flex items-center justify-center mt-20 lg:mt-40 mx-auto max-w-[1440px] px-4 lg:px-16">
      <div className="flex flex-col w-full lg:w-[80%] px-4">
        <div className="flex relative justify-center">
          <div className="bg-[#495961] p-3 w-full lg:w-[1100px]  text-center text-white text-[24px] lg:text-[32px] font-medium font-montserrat">
            Frequently Asked Questions (FAQs)
          </div>
          <img
            src={QuestionMark}
            alt="question-mark"
            className="absolute right-4 lg:right-10 top-4 hidden lg:flex"
            width={50}
            height={85}
          />
        </div>
        <div className="flex flex-col mt-10 gap-4">
          {FAQs.map((item, index) => (
            <div className="border border-[#495961] rounded-lg w-full lg:w-auto px-4">
              <div
                onClick={() => togglerFunction(index)}
                className="px-5 py-4 flex items-center justify-between cursor-pointer"
              >
                <p className="flex-1">{item.title}</p>
                <p>{selected === index ? <ChevronUp /> : <ChevronDown />}</p>
              </div>
              {selected === index && (
                <div className="mt-2">
                  <ul className="list-disc pl-5 border-t border-[#495961]">
                    {item.content.map((contentItem, i) => (
                      <li key={i}>{contentItem}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

