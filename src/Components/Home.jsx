import Banner from "./Banner";
import Carousel2 from "./Carousel2";
import SectionTitle from "./sectionTitle";

const Home = () => {
  return (
    <>
      <div>
       <section className="mb-[80px]">
       <Banner></Banner>
       </section>
        <SectionTitle
          subHeading={"---From 11:00am to 10:00pm---"}
          heading={"ORDER ONLINE"}
        ></SectionTitle>
        <div>
          <Carousel2></Carousel2>
        </div>
      </div>
    </>
  );
};

export default Home;
