import { Button } from "@material-tailwind/react";

const EventsBanner = () => {
    return (
        <section className="relative h-[60vh] mb-20">
            <div
                className="absolute inset-0 bg-[url('/src/assets/images/banner-bg.png')] bg-center -z-0"
            ></div>
            <div
                className="absolute inset-0 bg-secondary-color opacity-90 z-0"
            ></div>
            <div className="flex flex-col justify-center items-center text-center text-white h-full relative">
                <h2 className="text-7xl font-bold mb-6">Top Event Management Companies</h2>
                <p className="text-2xl mb-12">Which one is the best for your company?</p>
                <a href="" className="inline-block">
                    <Button size="sm"
                        className="hidden lg:inline-block rounded-full font-medium normal-case bg-primary-color text-sm px-6 py-3">
                        Find my agencies
                    </Button>
                </a>
            </div>
        </section>


    );
};

export default EventsBanner;