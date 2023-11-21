import AboutTwo from "../components/AboutTwo";
import Footer from "../components/Footer";
import Goal from "../components/Goal";
import GsapSlider from "../components/GsapSlider";
import Header from "../components/Header";
import HeroTwo from "../components/HeroTwo";
import Knowledge from "../components/Knowledge";
import Newsletter from "../components/Newsletter";
import Offer from "../components/Offer";
import OfferTwo from "../components/OfferTwo";

function HomeTwo() {
  return (
    <>
      <div>
        <Header />
        <HeroTwo />
        <AboutTwo />
        <Offer className="hidden lg:block" />
        {/* <GsapSlider/> */}
        <OfferTwo className="lg:hidden" />
        <Goal />
        <Knowledge />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default HomeTwo;
