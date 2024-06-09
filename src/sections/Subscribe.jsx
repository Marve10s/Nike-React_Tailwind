import Btn from "../components/Btn";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] font-palanquin font-bold ">
        Sign up <span className="text-coral-red"> for our newsletter</span>
      </h3>
      <div className="lg:max-w-[50%] w-full flex items-center gap-5 p-2.5 sm:border max-sm:flex-col sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subcribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Btn label="Sign up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
