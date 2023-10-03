import Skyline from "../assets/dubai-skyline.png";
import Testimonials from "./Testimonials.jsx";

const About = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="about" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Skyline} alt="/" />
        <div className="flex flex-col justify-center">
          <p className=" text-[#6499E9] font-bold">ABOUT US</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Creative solutions, creative results.
          </h1>
          <p>
            Colossal is an integrated communications agency providing customized
            PR and communication services to leading brands. In the new era of
            an evolved business environment; we offer target solutions to our
            clientele by adopting a research-driven strategy.
          </p>
          <button className="bg-[#6499E9] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3" onClick={() => scrollToSection('testimonials')}>
            Testimonials
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
