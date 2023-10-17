import NextNeed from "../../components/NextNeed";
import Banner from "./Banner";
import FindAgency from "./FindAgency";
import JoinCommunity from "./JoinCommunity";
import Testimonial from "./Testimonial";
import Services from "./services";

const Home = () => {
    return (
        <section className="">
            <Banner></Banner>
            <Services></Services>
            <FindAgency></FindAgency>
            <Testimonial></Testimonial>
            <JoinCommunity></JoinCommunity>
            <NextNeed></NextNeed>
        </section>
    );
};

export default Home;