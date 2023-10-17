import CommonBanner from "../../components/CommonBanner";
import NextNeed from "../../components/NextNeed";
import HelpCenter from "./HelpCenter";

const Help = () => {
    const info = {
        'h2': "How can we help you?",
        'p': "Any questions? We are here to help!",
        'button' : false
    }
    return (
        <>
            <CommonBanner info={info}></CommonBanner>
            <HelpCenter></HelpCenter>
            <NextNeed></NextNeed>
        </>
    );
};

export default Help;