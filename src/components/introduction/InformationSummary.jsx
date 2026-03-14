const InformationSummary = ({ item }) => {
  return (
    <div className={`bg-[#F6EBFE] text-center rounded-xl min-w-[80px] sm:min-w-[120px] px-2 sm:px-4`}>
      <div className="w-auto h-auto mx-1 sm:mx-2 my-3 xxs:my-3 sm:my-4">
        <p
          className={`text-[14px] xxs:text-[16px] sm:text-[24px] font-semibold text-gray-700`}
        >
          {item.description}
        </p>
        <p
          className={`text-[7px] xxs:text-[8px] sm:text-[13px] font-normal px-[0.5rem] sm:px-[0.8rem] text-wrap text-gray-500`}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default InformationSummary;
