
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// icons


const Testimonial = () => {
    const card = <Card color="white" shadow={false} className="w-full max-w-[20rem] border-[0.5px] px-4 py-6 border-[#AAAAAA] rounded-lg">
        <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex gap-4 pt-0 pb-2 mt-0"
        >
            <Avatar
                size="xxl"
                variant="rounded"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
                className="rounded-lg w-24 h-auto"
            />
            <div className="flex w-full flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Typography variant="h6" color="blue-gray" className="font-bold">
                        Tania Andrew
                    </Typography>
                    <div className="flex items-center gap-[6px]">
                        <img src="../../../src/assets/icons/promote.svg" alt="" />
                        <img src="../../../src/assets/icons/verified.svg" alt="" />

                    </div>
                </div>
                <Typography color="blue-gray" className="text-sm font-semibold">
                    Frontend Lead @ Google
                </Typography>

                <div className="flex gap-1">
                    <div className="flex items-center gap-1">
                        <img src="../../../src/assets/icons/star.svg" alt="" />
                        <img src="../../../src/assets/icons/star.svg" alt="" />
                        <img src="../../../src/assets/icons/star.svg" alt="" />
                        <img src="../../../src/assets/icons/star.svg" alt="" />
                        <img src="../../../src/assets/icons/star.svg" alt="" />
                    </div>
                    <p className="text-xs">(50)</p>
                </div>
                <Typography className="text-xs text-black font-medium">
                    Located in Am Friedrichshain 1, 10407 Berlin, Deutschland
                </Typography>
            </div>
        </CardHeader>

        <CardBody className="mb-6 p-0 space-y-2">
            <Typography className="text-base font-semibold text-black">
                About agency
            </Typography>
            <Typography className="text-[#AAAAAA] leading-snug">
                Chain Reaction is a Digital Integrated Agency tha
                Services.
            </Typography>
        </CardBody>
    </Card>

    // const responsive = {
    //     superLargeDesktop: {
    //         // the naming can be any, depends on you.
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 4
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };

    // const CustomLeftArrow = ({ previous }) => {
    //     return (
    //         <div

    //         >
    //             <i className="fal fa-chevron-left absolute bg-gray-50" onClick={previous}>TEST1</i>
    //         </div>
    //     )
    // };

    // const CustomRightArrow = ({ next }) => {
    //     return (
    //         <div

    //         >
    //             <i className="fal fa-chevron-right absolute bg-gray-50" onClick={next}>TEST2</i>
    //         </div>
    //     )
    // };

    return (
        <section className="bg-[#F9F5F1] bg-opacity-25 mt-32  px-4">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex  justify-center gap-0 pt-14">
                    <img src="../../../src/assets/icons/star-border.svg" alt="" />
                    <img src="../../../src/assets/icons/star-border.svg" alt="" />
                    <img src="../../../src/assets/icons/star-border.svg" alt="" />
                    <img src="../../../src/assets/icons/star-border.svg" alt="" />
                    <img src="../../../src/assets/icons/star-border.svg" alt="" />
                </div>
                <h3 className="text-4xl leading-snug font-bold text-center mt-5">90+ talented agencies with unique and verified <br /> customer reviews</h3>
                <div className="mt-16 pb-14 flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {card}
                        {card}
                        {card}
                        {card}
                    </div>
                    {/* <Carousel
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={1000}
                    arrows={true}>
                    {card}
                    {card}
                    {card}
                    {card}
                    {card}
                    {card}
                </Carousel> */}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;