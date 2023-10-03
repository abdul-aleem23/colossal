const Services = () => {
  return (
    <section id="services" className="w-full bg-white h-3/4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl  md:text-5xl bg-clip-text font-bold tracking-tighter mt-20">
          Discover Our Services
        </h1>
        <p className=" text-xl md:text-2xl m-5 text-[#6499E9] my-5">
          Our features are designed to enhance your productivity and streamline
          your workflow.
        </p>
        <div className="w-full max-w-full p-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-2 border-gray-800 p-4 rounded-lg">
              <svg
                className=" text-black h-6 w-6 mb-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
              </svg>
              <h2 className="text-xl font-bold text-black">Public Relations</h2>
              <p className="text-black">
                Constantly obtaining the right awareness and exposure for the
                brand, from <span className="font-semibold text-[#6499E9]">- Media relations to - PR campaigns to - Crisis
                communications.</span>
              </p>
            </div>
            <div className="flex flex-col space-y-2 border-gray-800 p-4 rounded-lg">
              <svg
                className=" text-black h-6 w-6 mb-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m8 6 4-4 4 4" />
                <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
                <path d="m20 22-5-5" />
              </svg>
              <h2 className="text-xl font-bold black">
                Social Media Management
              </h2>
              <p className="text-black">
                Showcasing the brand’s image and tone across all social media
                platforms. <span className="font-semibold text-[#6499E9]">- Instagram/Facebook - LinkedIn - Twitter.</span>
              </p>
            </div>
            <div className="flex flex-col space-y-2 border-gray-800 p-4 rounded-lg">
              <svg
                className=" text-black h-6 w-6 mb-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <h2 className="text-xl font-bold text-black">Event Management</h2>
              <p className="text-black">
                Delivering comprehensive event solutions from conceptualization
                to logistics and execution{" "}
                <span className="font-semibold text-[#6499E9]">
                  -Event Strategy -Operations and Logistics -Vendor Management
                </span>
              </p>
            </div>
            <div className="flex flex-col space-y-2 border-gray-800 p-4 rounded-lg">
              <svg
                className=" text-black h-6 w-6 mb-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <h2 className="text-xl font-bold text-black">Content Creation</h2>
              <p className="text-black">
                Curating all content to align with the brand objectives and
                ethos.{" "}
                <span className="font-semibold text-[#6499E9]">
                  - Copywriting - Translations - Videography and Photography.
                </span>
              </p>
            </div>
            <div className="flex flex-col space-y-2 border-gray-800 p-4 rounded-lg">
              <svg
                className=" text-black h-6 w-6 mb-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <h2 className="text-xl font-bold text-black">
                Digital Marketing
              </h2>
              <p className="text-black">
                Amplify brand story telling across all digital stakeholders.{" "}
                <span className="font-semibold text-[#6499E9]">- SEO - SEM
                - Paid adverts.</span>
              </p>
            </div>
            <div className="flex flex-col space-y-2 border-gray-800 p-4 rounded-lg">
              <svg
                className=" text-black h-6 w-6 mb-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m8 6 4-4 4 4" />
                <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
                <path d="m20 22-5-5" />
              </svg>
              <h2 className="text-xl font-bold text-black">
                Creative Design & Branding
              </h2>
              <p className="text-black">
                Setting the tone and voice of the brand with a clear story and a
                mission that connects with the right audience. <span className="font-semibold text-[#6499E9]">- Branding - Logo
                development - Creative design.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
