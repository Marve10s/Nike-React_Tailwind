import Btn from "../components/Btn";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="lg:max-w-lg font-palanquin text-4xl capitalize font-bold">
          We provide You <span className="text-coral-red">Super Quality</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Discover the latest in Nike footwear and stay ahead of the game with
          our top-notch products. Shop now and experience the difference. We are
          committed to providing you with the best possible experience and we
          are dedicated to delivering the highest quality products. Shop now and
          enjoy the best. We are committed to providing you with the best
          possible experience and we are dedicated to delivering the highest
          quality products. Shop now and experience the difference.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our shoes are made with the highest quality materials and
          craftsmanship.
        </p>
        <div className="mt-11">
          <Btn label="View labels" iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe"
          width={579}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
