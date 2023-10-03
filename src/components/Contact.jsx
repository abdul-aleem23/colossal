

const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen flex flex-row justify-center items-center">

      <div>
        <form className="flex flex-col">
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email"></input>
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1>Get in touch with us !</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aperiam
          nemo earum a accusantium illo.
        </p>
      </div>

    </div>
  );
};

export default Contact;
