// import Button from "../components/Button";
// import HeroMobile from "../assets/SVG/hero-mobile.svg";
// import Globe from "../assets/SVG/hero-globe.svg";

// export default function Hero() {
//   return (
//     <section className="mx-auto w-full h-full px-8 lg:px-10  flex flex-col lg:flex-row items-center justify-between">
//       <div className="mt-20 f">
//       <div className="relative w-full h-[20rem] lg:h-[27rem] lg:w-[60%] mx-auto">
//         <img
//           src={Globe}
//           alt="africa-globe"
//           className="w-full object-center h-full absolute left-[-10%]"
//         />

//         <div className="absolute top-[40%] w-[60%]  ">
//           <h1 className="text-[20px] lg:text-[28px] font-[500] text-[#041E0E]">
//             ECHO problems and projects in your local ECO
//           </h1>
//           <Button
//             content="EcHo"
//             variant="w-[80px] text-white mt-2 p-2"
//           ></Button>
//         </div>
//       </div>

//       <div>
//         <img src={HeroMobile} alt="hero-image" className="" />
//       </div>

//       </div>
      
//     </section>
//   );
// }







//// chat gpt
import Button from "../components/Button";
import HeroMobile from "../assets/SVG/hero-mobile.svg";
import Globe from "../assets/SVG/hero-globe.svg";

export default function Hero() {
  return (
    <section className="mx-auto w-full h-full px-4 lg:px-10 flex flex-col lg:flex-row items-center justify-between">
      <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row items-center w-full lg:w-auto">
        <div className="relative w-full h-[20rem] lg:h-[27rem] lg:w-[60%] mx-auto">
          <img
            src={Globe}
            alt="africa-globe"
            className="w-full object-cover h-full absolute left-0 lg:left-[-10%]"
          />
          <div className="absolute top-[40%] w-[80%] lg:w-[60%] mx-auto lg:mx-0 left-0 right-0 lg:left-auto lg:right-auto">
            <h1 className="text-[20px] lg:text-[28px] font-medium text-[#041E0E] text-center lg:text-left">
              ECHO problems and projects in your local ECO
            </h1>
            <Button
              content="EcHo"
              variant="w-[80px] text-white mt-2 p-2 mx-auto lg:mx-0"
            ></Button>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:ml-10">
          <img src={HeroMobile} alt="hero-image" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

