import Body from "../components/Body";
import CustomerReview from "../components/CustomerReview";
import IndiaTourDes from "../components/IndiaTourDes";
import InternationalTourDes from "../components/InternationalTourDes";
import PopularDestination from "../components/PopularDestination";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {
  return (
    <div>
      <Body />
      <IndiaTourDes />
      <InternationalTourDes />
      <PopularDestination />
      <CustomerReview />
      <WhyChooseUs />
    </div>
  );
}

export default Home;
