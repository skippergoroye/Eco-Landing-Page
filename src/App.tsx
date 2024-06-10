import { Footer, ComingSoon, Faqs,  Org, Subscribe, Navbar } from "./sections/Index";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Org />
      <ComingSoon />
      <Faqs />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
