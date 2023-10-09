import { Button } from "@material-tailwind/react";

const Banner = () => {
    return (
        <section className="mt-28">
            <div className="text-center">
                <h1 className="text-6xl font-bold">Find the <span className="text-primary-color">perfect</span> service provider</h1>
                <p className="text-2xl mt-5 mb-14 text-secondary-text-color">Shobevent helps you to describe your needs, meet relevant providers, <br />and hire the best one.</p>
            </div>
            <div className="relative w-full h-[60vh] lg:h-[80vh]">
                <div
                    className="bg-[url('/src/assets/images/banner-bg.jpg')] absolute inset-0 bg-no-repeat bg-cover bg-top">
                    <div className="absolute left-0 top-[-25px] w-full flex justify-center">
                        <Button
                            size="sm"
                            className="rounded-full text-sm md:text-xs md:px-4 xl:text-xl xl:px-7 py-4 bg-primary-color text-white font-normal capitalize font-display"
                        >
                            Get Started - <span className="italic font-medium">It&apos;s Free!</span>
                        </Button>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Banner;