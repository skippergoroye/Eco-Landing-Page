import NavLogo from "../assets/SVG/nav-logo.svg"

export default function Navbar() {
  return (
    <section className="px-8 lg:px-16 py-12 mx-auto max-w-[144opx]">
      <div className="bg-white rounded-lg shadow-3xl border z-10 border-blu">
        <div className="lg:ml-8 ml-2">
          <img src={NavLogo} />
        </div>
      </div>

    </section>
  )
}
