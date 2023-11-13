import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const FindAgency = () => {
    return (
        <section className="mt-48 px-4 max-w-screen-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center leading-normal">2 ways to meet the right agencies <br /> in 24 hours.</h2>
            <div className="flex justify-center items-center md:items-start gap-10 mt-10 flex-col md:flex-row">
                <Card className="mt-6 md:w-96 p-9 border-secondary-text-color border shadow-none rounded-lg">
                    <CardBody className="p-0 space-y-4">
                        <img src="../../../src/assets/icons/project.svg" alt="" />
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            Post a project. Meet agencies.
                        </Typography>
                        <Typography>
                            Describe your needs so our algorithm can suggest the best agencies for you. Connect with the ones you like and hire your favourite.
                        </Typography>
                    </CardBody>
                    <CardFooter className="mt-7 p-0">
                        <a href="" className="inline-block">
                            <Button size="sm"
                                className="rounded-full font-medium normal-case bg-primary-color text-sm px-6 hover:shadow-none">
                                Post a project
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
                <Card className="mt-6 md:w-96 p-9 border-secondary-text-color border shadow-none rounded-lg">
                    <CardBody className="p-0 space-y-4">
                        <img src="../../../src/assets/icons/catalog.svg" alt="" />
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            Explore our catalog of providers.
                        </Typography>
                        <Typography>
                            Describe your needs so our algorithm can suggest the best agencies for you. Connect with the ones you like and hire your favourite.
                        </Typography>
                    </CardBody>
                    <CardFooter className="mt-7 p-0">
                        <a href="" className="inline-block">
                            <Button size="sm"
                                variant="outlined"
                                className="rounded-full font-medium normal-case  text-sm px-6 border-primary-color hover:bg-primary-color text-primary-color hover:text-white hover:opacity-100">
                                Explore our catalog
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
            </div>

        </section>
    );
};

export default FindAgency;