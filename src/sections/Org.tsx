import Stroke from "../assets/SVG/organization-stroke.svg";
import OrgCard from "../components/OrgCard";
import { ORGANIZATIONS } from "../constants";


export default function Org() {
  return (
    <section className="mx-auto max-w-[1440px] sm:px-16 px-8 sm:py-40 py-12 flex flex-col justify-center gap-10">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-[32px]">Welcome to THE ECO</h2>
        <div className="flex flex-col items-center justify-center text-center mt-2">
          <h4 className="text-[20px] font-light">The ECO is an abbreviation meaning </h4>
          <h2 className="text-[22px]">ENIVIRONMENT, COMMUNITY & ORGANIZATION</h2>
          <img src={Stroke} alt="environment images" />
        </div>
      </div>
      <div className="flex gap-4 justify-center flex-wrap">
        {ORGANIZATIONS.map((org) => (
          <OrgCard key={org.title}  {...org} />
        ))}
      </div>
    </section>
  );
}
