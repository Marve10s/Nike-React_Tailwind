import star from "../assets/icons/star.svg";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="object-cover w-[120px] h-[120px] rounded-full"
      />
      <p className="mt-4 max-w-sm text-center info-text ">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl text-slate-gray font-montserrat ">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
