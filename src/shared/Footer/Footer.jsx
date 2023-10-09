import { IconButton, Typography } from "@material-tailwind/react";

const Footer = () => {

    const LINKS = [
        {
            title: "For clients",
            items: ["Post a project", "Explore", "Get advice", "Search"],
        },
        {
            title: "For agencies",
            items: ["How it works", "Pricing", "Get listed"],
        },
        {
            title: "Resources",
            items: ["Blog", "Data Hub", "Help & Support"],
        },
        {
            title: "Company",
            items: ["About", "Contact", "Jobs"],
        },
    ];

    const currentYear = new Date().getFullYear();
    return (
        <footer className="relative w-full bg-secondary-color text-white">
            <div className="mx-auto w-full max-w-7xl px-8">
                <Typography variant="h2" className="mb-6 pt-9">
                    shob<span className='text-primary-color'>event</span>
                </Typography>
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 mt-10">
                    <div>
                        <Typography variant="h6" className=" ">
                            Building great business stories.
                        </Typography>
                        <Typography variant="p" className="mb-6 mt-3 md:w-4/5 font-normal text-[#D9D9D9]">
                            We are an independent partner who knows Marketing & Advertising agencies’ competitive landscape. Tell us your nees and we’ll tell you the agencies you must need.
                        </Typography>
                        <div className="flex gap-4">
                            <IconButton className="rounded-full bg-[#B3DAFE]" size="sm">
                                <i className="fas fa-heart" />f
                            </IconButton>
                            <IconButton className="rounded-full bg-[#B3DAFE]" size="sm">
                                <i className="fas fa-heart" />I
                            </IconButton>
                            <IconButton className="rounded-full bg-[#B3DAFE]" size="sm">
                                <i className="fas fa-heart" />In
                            </IconButton>
                            <IconButton className="rounded-full bg-[#B3DAFE]" size="sm">
                                <i className="fas fa-heart" />Dri
                            </IconButton>
                        </div>

                    </div>
                    <div className="grid grid-cols-4 justify-between gap-5">
                        {LINKS.map(({ title, items }) => (
                            <ul key={title}>
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="mb-3 font-medium"
                                >
                                    {title}
                                </Typography>
                                {items.map((link) => (
                                    <li key={link}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            className="py-1.5 font-normal transition-colors text-[#D9D9D9]"
                                        >
                                            {link}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <Typography
                    variant="small"
                    className="pb-4 font-normal mt-10 text-[#525764] "
                >
                    {currentYear} &copy; Shobevent - All rights reserved - Terms of Use - Privacy Policy
                </Typography>
            </div>
        </footer >
    );
};

export default Footer;