import Banner from "./Banner";
import BistroImg from "./BistroImg";
import CallUs from "./CallUs";
import Carousel2 from "./Carousel2";
import CheckIt from "./CheckIt";
import HomeMenu from "./HomeMenu";
import Recommended from "./Recommended";
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
        <BistroImg></BistroImg>
        <HomeMenu></HomeMenu>
        <CallUs></CallUs>
        <Recommended></Recommended>
        <CheckIt></CheckIt>
      </div>
    </>
  );
};

export default Home;
