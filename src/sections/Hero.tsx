import Button from "../components/Button";
import HeroMobile from "../assets/SVG/hero-mobile.svg"


export default function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 lg:px-10 relative flex flex-col lg:flex-row items-center">
      <div className="absolute w-full lg:w-[600px] h-[400px] bg-pattern-2 bg-cover bg-center overflow-hidden" />
   
      <div className="w-1/2">
        <h1 className="text-[30px] font-semibold text-[#041E0E]">ECHO problems and projects in your local ECO</h1>
        <Button content="EcHo" variant="w-[80px] text-white mt-2 p-2"></Button>
      </div>

      <div className="w-1/2 lg:ml-40">
        <img  src={HeroMobile} alt="hero-image"  className=""/>
      </div>      
    </section>
  );
}
