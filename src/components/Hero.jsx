import { Typewriter } from "react-simple-typewriter";
import treeSky from "../assets/tree-sky.jpg";
import Services from "./Services.jsx";
import mouse from "../assets/mouse-scroll.svg";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="text-white w-full relative mt-24 z-2">
      <img
        src={treeSky}
        className="w-full h-3/4 object-cover absolute mix-blend-overlay z-0 blur-sm"
      />
      <div className="max-w-[800px] mt-[-96px] w-full h-[800px] mx-auto text-center flex flex-col justify-center items-center z-10">
        <p className="bg-black text-[white] font-bold p-2 w-[300px]">
          We are Colossal Communications
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-black">
          Grow with us
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl font-bold py-4 text-black">
            Researched marketing strategies for
          </p>
          <div className=" flex justify-center items-center md:text-3xl sm:text-2xl font-bold pl-2 text-[white]">
            <Typewriter
              words={["Businesses.", "Influencers."]}
              typeSpeed={120}
              deleteSpeed={140}
              cursor
              loop={false}
            />
          </div>
        </div>
        <p className="md:text-2xl text-xl font-bold text-[white]">
          An integrated communications agency based in Dubai offering services
          for an ever-evolving business.
        </p>
        <button
          className="bg-[white] text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 z-50"
          onClick={() => scrollToSection("services")}
        >
          Learn more
        </button>
      </div>
      <div className="flex flex-row justify-center items-center my-5">
        <img src={mouse} className="w-[35px]" />
        <p className="text-black z-50">Scroll to see more sections</p>
      </div>
    </div>
  );
};

export default Hero;
