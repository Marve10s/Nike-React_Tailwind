const ServiceCard = ({ label, imgURL, subtext }) => {
  return (
    <div className="flex-1 py-16 shadow-3xl px-10  sm:w-[350px] w-full rounded-[20px]">
      <div className="w-11 flex h-11 justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
