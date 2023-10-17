import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const HelpCenter = () => {
    return (
        <section>
            <h3 className="text-center text-5xl font-semibold">Help Center</h3>
            <p className="text-center text-xl mt-7 leading-snug">Any questions regarding our services? <br /> Check our help center or ask for support.</p>
            {/* Card */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-20 mb-28">
                <Card className="py-10 px-8 w-[400px] border border-[#585A5E] rounded-lg text-center shadow-none">
                    <CardBody className="p-0">
                        <img className="mx-auto mb-2" src="/src/assets/icons/message.svg" alt="" />
                        <Typography className="text-2xl font-semibold text-secondary-color">
                            General FAQ
                        </Typography>
                        <Typography className="text-sm font-normal text-secondary-color pt-1">
                            Get help on password management, account creation and communication with Sortlist.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-8 px-0 pb-0">
                        <Button fullWidth variant="text" className="rounded-md normal-case font-medium text-sm border border-primary-color text-primary-color hover:bg-primary-color hover:text-white">Continue</Button>
                    </CardFooter>
                </Card>
                <Card className="py-10 px-8 w-[400px] border border-[#585A5E] rounded-lg text-center shadow-none">
                    <CardBody className="p-0">
                        <img className="mx-auto mb-2" src="/src/assets/icons/users.svg" alt="" />
                        <Typography className="text-2xl font-semibold text-secondary-color">
                            I’m a prospect
                        </Typography>
                        <Typography className="text-sm font-normal text-secondary-color pt-1">
                            Get help on password management, account creation and communication with Sortlist.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-8 px-0 pb-0">
                        <Button fullWidth variant="text" className="rounded-md normal-case font-medium text-sm border border-primary-color text-primary-color hover:bg-primary-color hover:text-white">Continue</Button>
                    </CardFooter>
                </Card>
                <Card className="py-10 px-8 w-[400px] border border-[#585A5E] rounded-lg text-center shadow-none">
                    <CardBody className="p-0">
                        <img className="mx-auto mb-2" src="/src/assets/icons/briefcase.svg" alt="" />
                        <Typography className="text-2xl font-semibold text-secondary-color">
                            I’m an agency
                        </Typography>
                        <Typography className="text-sm font-normal text-secondary-color pt-1">
                            Get help on password management, account creation and communication with Sortlist.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-8 px-0 pb-0">
                        <Button fullWidth variant="text" className="rounded-md normal-case font-medium text-sm border border-primary-color text-primary-color hover:bg-primary-color hover:text-white">Continue</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="text-center mb-32">
                <h2 className="text-secondary-color text-3xl font-semibold">Now What are you looking for?</h2>
                <Button size="sm"
                    className="rounded-full hover:shadow-none font-normal normal-case text-lg bg-primary-color px-10 py-3 mt-10">
                    Chat with us
                </Button>
            </div>
        </section>
    );
};

export default HelpCenter;