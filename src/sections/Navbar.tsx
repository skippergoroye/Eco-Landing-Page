import NavLogo from "../assets/SVG/nav-logo.svg"
import { ChevronDown  } from "lucide-react";

export default function Navbar() {
  return (
    <section className="px-8 lg:px-16 py-12 mx-auto w-full fixed  z-50">
      <div className="bg-white rounded-lg shadow-3xl border z-10">
        <div className="lg:ml-8 ml-2 flex items-center justify-start lg:gap-6 gap-1">
          <img src={NavLogo} />
          <div className="flex items-center justify-center">
            <p>Eco</p>
            <ChevronDown />
          </div>
          <div className="flex gap-2 lg:gap-10">
            <p>PALs</p>
            <p>iPALs</p>
            <p>Innovation</p>
          </div>
        </div>
      </div>

    </section>
   
  )
}
