import CommonBanner from "../../components/CommonBanner";
import BestAgencies from "./BestAgencies";
import { FAQ } from "./FAQ";
import LetUsHelp from "./letUsHelp";

const Events = () => {
    const info = {
        'h2': "Top Event Agencies",
        'p': "Which one is the best for your company?",
        'button' : true
    }
    return (
        <>
            <CommonBanner info={info}></CommonBanner>
            <BestAgencies></BestAgencies>
            <LetUsHelp></LetUsHelp>
            <FAQ></FAQ>
        </>
    );
};

export default Events;