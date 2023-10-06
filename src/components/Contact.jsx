import Coffee from "../assets/coffee2.jpg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-auto flex flex-row justify-items-center items-center"
    >
      <div className="max-w-[1540px] mx-auto grid md:grid-cols-2 justify-items-center items-center">
        <div className="md:w-[770px] flex flex-col justify-center items-center md:border-r md:border-r-gray-500">
          <h1 className="md:text-5xl sm:text-4xl text-3xl m-4 bg-clip-text font-bold tracking-tighter">
            Get in touch with us!
          </h1>
          <p className="m-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
            fugit.
          </p>
          <img
            src={Coffee}
            className="w-[270px] md:w-[470px] rounded-full md:rounded-lg mx-auto"
          />
        </div>

        <div className="w-[350px] md:w-[770px] flex flex-col justify-center items-center">
          <p className="m-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            minima a optio eveniet?
          </p>
          <form className="flex flex-col w-full md:w-[500px] mx-auto p-6">
            <input
              className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Name/Company"
            />
            <input
              className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Message"
              rows="4"
            />
            <button
              className="bg-[#6499E9] text-white px-4 rounded-md hover:bg-[#5683c7] transition duration-300 w-[200px] font-medium my-6 mx-auto md:mx-0 py-3"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
