const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <p className="text-[20px]">{subHeading}</p>
      <p className="text-[40px]">{heading}</p>
    </div>
  );
};

export default SectionTitle;
