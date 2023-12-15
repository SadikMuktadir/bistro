

const Cover = ({img,title,desc}) => {
    return (
        <div>
           <div className="hero min-h-screen" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-[1000px] h-[450px] bg-[#15151563] flex flex-col justify-center items-center">
      <h1 className="mb-5 text-[50px] font-bold">{title}</h1>
      <p className="text-[24px]">{desc}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cover;