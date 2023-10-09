import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

const JoinCommunity = () => {
    return (
        <section className="mt-24">
            <h3 className="font-bold text-center text-4xl leading-normal">Join the greatest community <br /> of <span className="text-primary-color">agencies.</span></h3>
            <Card className="w-full max-w-[56rem] items-center flex-col-reverse md:flex-row mt-3 mx-auto opacity-100 rounded-none shadow-none border-t pt-8 border-secondary-color">

                <CardBody>
                    <Typography variant="h2" color="black" className="mb-4">
                        Drive revenue like never before
                    </Typography>
                    <Typography color="black" className=" text-sm font-normal">
                        Describe your needs so our algorithm can suggest the best agencies for you. Connect with the ones you like and hire your favourite.
                    </Typography>
                    <Button size="sm"
                        className="mt-8 rounded-full font-medium normal-case bg-primary-color text-sm px-6">
                        Get listed
                    </Button>
                </CardBody>
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="my-0 md:my-3 w-full md:w-2/5 h-72 shrink-0 "
                >
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
            </Card>
            <div className="mt-32 bg-[#F9F5F1] py-28">
                <Card className="w-full max-w-[56rem] items-center flex-col-reverse md:flex-row mt-3 mx-auto  opacity-100 text-center rounded-none shadow-none bg-[#F9F5F1]">

                    <CardBody className="py-10">
                        <Typography variant="h2" color="black" className="mb-4">
                            Think Shobevent for your next need!
                        </Typography>
                        <Typography color="black" className="mx-auto text-sm w-3/5 font-normal">
                            Describe your needs so our algorithm can suggest the best agencies for you. Connect with the ones you like and hire your favorite.
                        </Typography>
                        <div className="mt-6 flex flex-col md:flex-row justify-center gap-5 items-center">
                            <Button size="sm"
                                className="rounded-full font-medium normal-case bg-primary-color text-sm px-6">
                                Post a project
                            </Button>
                            <p className="text-black text-sm font-medium">or</p>
                            <Button size="sm"
                                variant="outlined"
                                className="rounded-full font-medium normal-case  text-sm px-6 border-primary-color hover:bg-primary-color text-primary-color hover:text-white hover:opacity-100">
                                Search agencies
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </section>
    );
};

export default JoinCommunity;