import { Select, Option, } from "@material-tailwind/react";
import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const BestAgencies = () => {
    const [active, setActive] = React.useState(1);

    const getItemProps = (index) =>
    ({
        variant: active === index ? "filled" : "text",
        className: active === index ? "bg-primary-color rounded-full" : "rounded-full",
        color: "gray",
        onClick: () => setActive(index),
    });

    const next = () => {
        if (active === 5) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    function StarIcon() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 text-yellow-700"
            >
                <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }

    const card = <Card color="white" shadow={false} className="w-full max-w-[24rem] border-[0.5px] p-7 border-[#AAAAAA] rounded-lg">
        <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex gap-4 pt-0 pb-7 mt-0 rounded-none border-b border-grayish-color"
        >
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/05/attachment_28920863-e1525351777928.jpeg?auto=format&q=60&fit=max&w=930" className="w-28 h-auto rounded-none object-center" alt="" />
            <div className="flex w-full flex-col gap-1">
                <div className="flex items-center justify-between">
                    <Typography variant="h4" color="blue-gray" className="font-bold">
                        Wirelab
                    </Typography>
                    <div className="flex items-center gap-1">
                        <StarIcon />
                        <StarIcon />
                    </div>
                </div>
                <Typography color="blue-gray" className="text-sm font-medium">
                    Frontend Lead @ Google
                </Typography>

                <div className="flex items-center gap-0">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <Typography className="text-xs text-black font-medium">
                    Located in Am Friedrichshain 1, 10407 Berlin, Deutschland
                </Typography>
            </div>
        </CardHeader>

        <CardBody className="mt-4 p-0 space-y-2">
            <Typography className="text-sm text-[#585A5E]">
                45 Works in event
            </Typography>
            <Typography className="text-sm text-[#585A5E]">
                Active in the erbil, Iraq
            </Typography>
            <Typography className="text-sm text-[#585A5E]">
                From $1000 Event
            </Typography>
            <Link>
                <Button className="w-full mt-9 capitalize font-medium text-sm bg-primary-color">View Profile</Button>
            </Link>
        </CardBody>
    </Card>

    return (
        <section className="max-w-screen-2xl mx-auto mb-24">
            <h3 className="text-3xl font-semibold text-secondary-color">Best Event Agencies</h3>
            <p className="text-sm text-[#585A5E] my-2">Home -- Event</p>
            {/* Sorting */}
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex w-full gap-4 justify-between lg:justify-normal">
                    <div className="w-1/5">
                        <Select color="blue" label="Place" size="md" className="">
                            <Option>Dhaka</Option>
                            <Option>Comilla</Option>
                            <Option>Gazipur</Option>
                            <Option>Sylhet </Option>
                        </Select>
                    </div>
                    <div className="w-1/5">
                        <Select color="blue" label="Event" size="md" className="">
                            <Option>Dhaka</Option>
                            <Option>Comilla</Option>
                            <Option>Gazipur</Option>
                            <Option>Sylhet </Option>
                        </Select>
                    </div>
                </div>
                <div className="w-1/5 mt-10 lg:mt-0">
                    <Select color="blue" label="Recommended" size="md" className="">
                        <Option>Dhaka</Option>
                        <Option>Comilla</Option>
                        <Option>Gazipur</Option>
                        <Option>Sylhet </Option>
                    </Select>
                </div>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {card}
                {card}
                {card}
                {card}
                {card}
                {card}
                {card}
                {card}
            </div>
            {/* pagination */}
            <div className="flex items-center justify-center mt-10 gap-4">
                <IconButton className="rounded-full bg-primary-color text-white"
                    onClick={prev}
                    disabled={active === 1}>
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
                <div className="flex items-center gap-2">
                    <IconButton {...getItemProps(1)}>1</IconButton>
                    <IconButton {...getItemProps(2)}>2</IconButton>
                    <IconButton {...getItemProps(3)}>3</IconButton>
                    <IconButton {...getItemProps(4)}>4</IconButton>
                    <IconButton {...getItemProps(5)}>5</IconButton>
                </div>
                <IconButton className="rounded-full bg-primary-color text-white"
                    onClick={next}
                    disabled={active === 5}>
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
            </div>
        </section >
    );
};

export default BestAgencies;