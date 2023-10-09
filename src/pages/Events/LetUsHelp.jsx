import { Button } from "@material-tailwind/react";

const LetUsHelp = () => {
    return (
        <section className="mx-auto mb-28">
            <div className="border border-secondary-color rounded-3xl py-10 px-14 text-center max-w-5xl mx-auto">
                <h2 className="text-4xl mb-4 font-semibold text-secondary-color">Struggling to choose? Let us help.</h2>
                <p className="text-xl leading-normal text-secondary-text-color">Post a project for free and quickly meet qualified providers. Use our data and on-demand experts to pick the right one for free. Hire them and take your business to the next level.</p>
                <Button size="sm"
                    className="rounded-full font-medium normal-case bg-primary-color text-sm px-10 py-[14px] mt-11">
                    Post a project
                </Button>
            </div>
        </section>
    );
};

export default LetUsHelp;