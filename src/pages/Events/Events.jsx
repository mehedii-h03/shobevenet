import BestAgencies from "./BestAgencies";
import EventsBanner from "./EventsBanner";
import { FAQ } from "./FAQ";
import LetUsHelp from "./letUsHelp";

const Events = () => {
    return (
        <>
            <EventsBanner></EventsBanner>
            <BestAgencies></BestAgencies>
            <LetUsHelp></LetUsHelp>
            <FAQ></FAQ>
        </>
    );
};

export default Events;