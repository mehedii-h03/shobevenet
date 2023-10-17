import {
    Card,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

const NextNeed = () => {
    return (
        <div className="mt-32 bg-[#F9F5F1] py-28">
            <Card  className="w-full max-w-[56rem] items-center flex-col-reverse md:flex-row mt-3 mx-auto  opacity-100 text-center rounded-none shadow-none bg-[#F9F5F1]">
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
        </div>);
};

export default NextNeed;