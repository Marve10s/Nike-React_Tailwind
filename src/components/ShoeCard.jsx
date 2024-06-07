const ShoeCard = ({ ImgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== ImgURL.bigShoe) {
      changeBigShoeImage(ImgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1
          ${
            bigShoeImg === ImgURL.bigShoe
              ? "border-coral-red"
              : "border-transparent"
          }
        `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={ImgURL.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
