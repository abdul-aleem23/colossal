import quotes from "../assets/quotes.svg";

const Testimonials = () => {
  return (
    <div id="testimonials" className="w-full h-3/4">
      <div className="flex flex-col  p-10">
        <h1 className="text-4xl  md:text-5xl bg-clip-text font-bold tracking-tighter mt-18">
          Testimonials
        </h1>
        <p className=" text-xl md:text-2xl m-5 text-[#6499E9] my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum,
          neque.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
        <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
          <img
            src={quotes}
            alt="double_quotes"
            className="w-[42px] h-[27px] object-contain"
          />
          <p className="text-[18px] leading-[32px] my-10">
            Publicity is absolutely critical. A good PR story is infinitely more
            effective than a front-page ad.
          </p>
          <p>- Abdul Aleem</p>
        </div>

        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
          <img
            src={quotes}
            alt="double_quotes"
            className="w-[42px] h-[27px] object-contain"
          />
          <p className="text-[18px] leading-[32px] my-10">
            Publicity is absolutely critical. A good PR story is infinitely more
            effective than a front-page ad.
          </p>
          <p>- Abdul Aleem</p>
        </div>

        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
          <img
            src={quotes}
            alt="double_quotes"
            className="w-[42px] h-[27px] object-contain"
          />
          <p className="text-[18px] leading-[32px] my-10">
            Publicity is absolutely critical. A good PR story is infinitely more
            effective than a front-page ad.
          </p>
          <p>- Abdul Aleem</p>
        </div>

        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
          <img
            src={quotes}
            alt="double_quotes"
            className="w-[42px] h-[27px] object-contain"
          />
          <p className="text-[18px] leading-[32px] my-10">
            Publicity is absolutely critical. A good PR story is infinitely more
            effective than a front-page ad.
          </p>
          <p>- Abdul Aleem</p>
        </div>

        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
          <img
            src={quotes}
            alt="double_quotes"
            className="w-[42px] h-[27px] object-contain"
          />
          <p className="text-[18px] leading-[32px] my-10">
            Publicity is absolutely critical. A good PR story is infinitely more
            effective than a front-page ad.
          </p>
          <p>- Abdul Aleem</p>
        </div>

        

        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
          <img
            src={quotes}
            alt="double_quotes"
            className="w-[42px] h-[27px] object-contain"
          />
          <p className="text-[18px] leading-[32px] my-10">
            Publicity is absolutely critical. A good PR story is infinitely more
            effective than a front-page ad.
          </p>
          <p>- Abdul Aleem</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
