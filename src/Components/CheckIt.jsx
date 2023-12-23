import img from '../../public/assets/home/featured.jpg'
const CheckIt = () => {
  return (
    <div className="my-[100px]">
      <div className="hero min-h-screen bg-fixed bg-opacity-60" style={{backgroundImage: `url(${img})`}}>
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl w-[200px] md:w-[500px]"
          />
          <div className='lg:ml-[80px] md:w-[300px] lg:w-[600px] bg-[#151515B3] p-[10px] lg:p-[80px]'>
            <p className='text-[20px] mb-2 text-[#fff]'>March 20, 2023</p>
            <p className='text-[20px] mb-2 text-[#fff]'>WHERE CAN I GET SOME?</p>
            <p className='text-[15px] text-[#fff]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quasi, officiis asperiores exercitationem quidem error reiciendis magni iusto iure, cumque quisquam vel a, aliquam mollitia. Hic, obcaecati nihil vel quam quod aut ea libero incidunt? Exercitationem dolorem maiores error, molestias velit repudiandae voluptatibus nesciunt nemo corporis pariatur adipisci enim necessitatibus asperiores eius </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckIt;
