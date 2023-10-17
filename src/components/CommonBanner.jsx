import { Button } from "@material-tailwind/react";

const CommonBanner = ({ info }) => {
    const { h2, p, button } = info
    return (
        <section className="relative h-[64vh] mb-24">
            <div
                className="absolute inset-0 bg-[url('/src/assets/images/banner-bg.png')] bg-center -z-0"
            ></div>
            <div
                className="absolute inset-0 bg-secondary-color z-0"
            ></div>
            <div className="flex flex-col justify-center items-center text-center text-white h-full relative">
                <h2 className="text-[80px] font-bold mb-2">{h2}</h2>
                <p className="text-2xl mb-14">Which one is the best for your company?</p>
                {
                    button && <a href="" className="inline-block">
                        <Button size="sm"
                            className="rounded-full font-normal normal-case text-xl bg-primary-color px-6 py-3">
                            Find my agencies
                        </Button>
                    </a>
                }
            </div>
        </section>
    );
};

export default CommonBanner;