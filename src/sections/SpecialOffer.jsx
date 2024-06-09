import { offer } from "../assets/images";
import Btn from "../components/Btn";
import { arrowRight } from "../assets/icons/";

// 2:15:12 / 2:49:56

const SpecialOffer = () => {
  return (
    <section className=" flex max-xl:flex-col-reverse gap-10 max-container     justify-center items-center">
      <div className="flex-1">
        <img
          className="object-contain"
          src={offer}
          width={773}
          height={600}
          alt="offer"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="lg:max-w-lg font-palanquin text-4xl capitalize font-bold">
          <span className="text-coral-red">Special </span>Offer
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Our special Offer is for the first time in history. We are offering
          you a free pair of shoes for the first time in history. We are
          offering you a free pair of shoes for the first time in history. We
          are offering you a free pair of shoes for the first time in history.
          We are
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          We are offering you a free pair of shoes for the first time in
          history.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Btn label="Shop now" iconURL={arrowRight} />
          <Btn
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            iconURL={arrowRight}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
