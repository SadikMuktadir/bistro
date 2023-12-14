const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center">
      <p className="text-[#D99904] text-[20px]">{subHeading}</p>
      <div className="flex justify-center">
      <p className="w-[424px] mt-4" style={{border:"4px solid #E8E8E8"}}></p>
      </div>
      <p className="text-[#151515] text-[48px] mt-5">{heading}</p>
      <div className="flex justify-center">
      <p className="w-[424px] my-4" style={{border:"4px solid #E8E8E8"}}></p>
      </div>
    </div>
  );
};

export default SectionTitle;
