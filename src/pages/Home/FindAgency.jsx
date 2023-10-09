import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const FindAgency = () => {
    return (
        <section className="mt-32 px-4 max-w-screen-2xl mx-auto">
            <h2 className="text-3xl  md:text-4xl lg:text-[42px] font-bold text-center">2 ways to meet the right agencies in 24 hours.</h2>
            <div className="flex justify-center items-center md:items-start gap-10 mt-10 flex-col md:flex-row">
                <Card className="mt-6 md:w-96 p-9 border-secondary-text-color border shadow-none rounded-lg">
                    <CardBody className="p-0 space-y-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mb-4 h-12 w-12 text-gray-900"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                clipRule="evenodd"
                            />
                            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                        </svg>
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
                                className="rounded-full font-medium normal-case bg-primary-color text-sm px-6">
                                Post a project
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
                <Card className="mt-6 md:w-96 p-9 border-secondary-text-color border shadow-none rounded-lg">
                    <CardBody className="p-0 space-y-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mb-4 h-12 w-12 text-gray-900"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                clipRule="evenodd"
                            />
                            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                        </svg>
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