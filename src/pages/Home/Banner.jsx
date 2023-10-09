import { Button } from "@material-tailwind/react";

const Banner = () => {
    return (
        <section className="mt-10">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Find the <span className="text-primary-color">perfect</span> service provider</h1>
                <p className="text-lg my-5 text-[#858B98]">Shobevent helps you to describe your needs, meet relevant providers, <br />and hire the best one.</p>
            </div>
            <div className="relative w-full h-[60vh] lg:h-[70vh]">
                <div
                    className="bg-[url('/src/assets/images/banner-bg.png')] absolute inset-0 bg-no-repeat bg-cover">
                    <div className="absolute left-0 w-full flex justify-center">
                        <Button
                            size="sm"
                            className="rounded-full text-sm md:text-xs md:px-4 xl:text-sm xl:px-8 py-4 bg-primary-color text-white font-normal capitalize"
                        >
                            Get Started - <span className="italic font-bold">It&apos;s Free!</span>
                        </Button>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Banner;