import EmailIcon from "../assets/SVG/email.svg";
import EmailSend from "../assets/SVG/email-send.svg";

export default function Subscribe() {
  return (
    <section className="relative flex items-center justify-center bg-white mt-[150px] md:mt-[300px] lg:mt-60">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full lg:w-[716px] p-4 sm:p-6  bg-white rounded-xl border border-black-500 shadow-3xl text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 mt-4">
            Subscribe to get News and Updates
          </h2>
          <p className="text-sm sm:text-base text-gray-700 lg:w-[620px]">
            Want to know about what we’re up to, news about Africa, and updates
            with our app? Sign up for our newsletter!
          </p>
          <div className="flex justify-center items-center gap-2 lg:w-[450px] lg:ml-28">
            <div className="relative mt-6 flex-1">
              <span className="absolute inset-y-0 flex items-center pl-3">
                <img src={EmailIcon} alt="email icon" />
              </span>
              <input
                type="text"
                title="email"
                placeholder="Email Address"
                className="w-full pl-10 border py-2 pr-4 rounded-lg focus:outline-none focus:border-blue-500 hover:ring-0"
              />
            </div>
            <div className="mt-5 w-10">
              <img src={EmailSend} alt="email icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
