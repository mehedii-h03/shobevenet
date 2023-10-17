import { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


const CommonBanner = ({ info }) => {
    const { h2, p, button } = info

    const [open, setOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const maxStep = 3;
    const handleOpen = () => setOpen(!open);

    const handleStartNow = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

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
                <p className="text-2xl mb-14">{p}</p>
                {
                    button && <a className="inline-block">
                        <Button size="sm"
                            onClick={handleOpen}
                            className="rounded-full font-normal normal-case text-xl bg-primary-color px-6 py-3">
                            Find my agencies
                        </Button>
                    </a>
                }
            </div>
            {/* Modal */}
            <Dialog open={open} handler={() => setOpen(false)} className="rounded-[30px] xl py-14" size="sm">
                <DialogHeader className="justify-center text-secondary-color text-lg">
                    Shob<span className="text-primary-color">event</span>
                </DialogHeader>
                <DialogBody className="text-black text-center text-2xl leading-normal">
                    {currentStep === 1 && (
                        <>
                            We’ll ask you <br />
                            <span className="font-bold">the right questions</span> <br />
                            so we can introduce you to <br />
                            <span className="font-bold">the right agencies.</span>
                        </>
                    )}
                    {currentStep === 2 && (
                        <>
                            {/* Content for the second step */}
                        </>
                    )}
                    {/* Add more steps as needed */}
                </DialogBody>
                <DialogFooter className="justify-center pt-11">
                    {currentStep === 1 && (
                        <Button
                            size="sm"
                            onClick={handleStartNow}
                            className="rounded-full font-medium normal-case bg-primary-color text-sm px-10 py-2"
                        >
                            Start Now
                        </Button>
                    )}
                    {currentStep > 1 && (
                        <Button
                            size="sm"
                            onClick={handlePrev}
                            className="rounded-full font-medium normal-case bg-primary-color text-sm px-10 py-2"
                        >
                            Prev
                        </Button>
                    )}
                    {currentStep !== 1 && currentStep < maxStep && (
                        <Button
                            size="sm"
                            onClick={handleNext}
                            className="rounded-full font-medium normal-case bg-primary-color text-sm px-10 py-2"
                        >
                            Next
                        </Button>
                    )}
                </DialogFooter>
            </Dialog>
        </section>
    );
};

export default CommonBanner;