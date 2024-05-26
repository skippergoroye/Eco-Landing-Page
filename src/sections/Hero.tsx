import Button from "../components/Button";
import HeroMobile from "../assets/SVG/hero-mobile.svg";
import Globe from "../assets/SVG/hero-globe.svg";

export default function Hero() {
  return (
    <section className="mx-auto w-full h-full px-8 lg:px-10  flex flex-col lg:flex-row items-center justify-between">
      <div className="relative w-full h-[20rem] lg:h-[27rem] lg:w-[60%] mx-auto">
        <img
          src={Globe}
          alt="africa-globe"
          className="w-full object-center h-full absolute left-[-10%]"
        />

        <div className="absolute top-[40%] w-[60%]  ">
          <h1 className="text-[20px] lg:text-[28px] font-[500] text-[#041E0E]">
            ECHO problems and projects in your local ECO
          </h1>
          <Button
            content="EcHo"
            variant="w-[80px] text-white mt-2 p-2"
          ></Button>
        </div>
      </div>

      <div>
        <img src={HeroMobile} alt="hero-image" className="" />
      </div>
    </section>
  );
}
