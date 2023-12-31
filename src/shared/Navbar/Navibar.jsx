import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Chip,
} from "@material-tailwind/react";
import {
    HeartIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
    XMarkIcon,
    FlagIcon,
    ChatBubbleOvalLeftIcon,
    UsersIcon,
    FolderIcon,
    RocketLaunchIcon,
    FaceSmileIcon,
    UserIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
// logo
import logo from "../../../src/assets/images/Logo.svg";

// icons 


const navListMenuItems = [
    {
        color: "blue",
        icon: FlagIcon,
        title: "Events",
        route: "/events",
        description: "Discover and browse our entire catalog of agencies.",
    },
    {
        color: "orange",
        icon: ChatBubbleOvalLeftIcon,
        title: "Vanue",
        description: "Discover and browse our entire catalog of agencies.",
    },
    {
        color: "green",
        icon: UsersIcon,
        title: (
            <div className="flex items-center gap-1">
                Education {" "}
                <Chip
                    size="sm"
                    color="green"
                    variant="ghost"
                    value="We're hiring!"
                    className="capitalize"
                />
            </div>
        ),
        description: "Discover and browse our entire catalog of agencies.",
    },
    {
        color: "blue-gray",
        icon: FolderIcon,
        title: "Festivals",
        description: "Discover and browse our entire catalog of agencies.",
    },
    {
        color: "purple",
        icon: RocketLaunchIcon,
        title: "Food",
        description: "Discover and browse our entire catalog of agencies.",
    },
    {
        color: "teal",
        icon: FaceSmileIcon,
        title: "Music",
        description: "Discover and browse our entire catalog of agencies.",
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(
        ({ icon, title, route, description, color }, key) => (
            <Link to={route} key={key}>
                <MenuItem className="flex items-center rounded-none px-3 py-4 hover:bg-[#f1f1f1]">
                    <div>
                        <Typography
                            variant="h3"
                            color="blue-gray"
                            className="flex items-center text-sm xl:text-lg"
                        >
                            {title}
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal w-60">
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </Link>
        )
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom-start"
            >
                <MenuHandler>
                    <Typography as="div" variant="medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 text-secondary-color font-medium"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Find Services
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden rounded-md lg:block p-0 border-5">
                    <ul className="grid grid-cols-2 shadow-2xl">{renderItems}</ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <NavListMenu />
            <Typography
                as="a"
                href="#"
                variant="small"
                className="font-medium text-secondary-color text-base"
            >
                <Link to='/'>
                    <ListItem className="flex items-center gap-2 py-2 pr-4">
                        Events
                    </ListItem>
                </Link>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="medium"
                className="font-medium text-secondary-color opacity"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Shop
                </ListItem>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="medium"
                className="font-medium text-secondary-color"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Resources
                </ListItem>
            </Typography>
        </List>
    );
}

export function Navibar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-full shadow-none border-[#585A5E] border-opacity-30 lg:py-7 border-0 rounded-none border-b px-8 py-8">
            <div className="max-w-screen-2xl mx-auto flex items-center justify-between lg:justify-self-auto">
                <Link to='/'>
                    <Typography
                        as="a"
                        href="#"
                        variant="h4"
                        className="mr-4 cursor-pointer py-1.5"
                    >
                        <img src={logo} alt="" />
                    </Typography>
                </Link>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden relative rounded-full bg-transparent border lg:flex items-center w-1/3 h-10 border-secondary-color">
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full h-full p-1 pl-10 rounded-full bg-transparent placeholder:text-secondary-color outline-0"
                    />
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                        <MagnifyingGlassIcon className="h-5 w-5 text-secondary-color" />
                    </div>
                </div>
                <div className="hidden gap-2 lg:flex">
                    {/* <div className="relative rounded-full bg-transparent border flex items-center">
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-full h-full p-1 pl-10 rounded-full bg-transparent placeholder:text-[#aaaaaa] "
                        />
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                            <MagnifyingGlassIcon className="h-5 w-5 text-[#aaaaaa]" />
                        </div>
                    </div> */}
                    <IconButton variant="text">
                        <i className="se-heart text-xl"></i>
                    </IconButton>
                    <Button size="sm"
                        className="hidden lg:inline-block hover:shadow-none rounded-full font-medium normal-case bg-primary-color text-sm px-6">
                        Post a project
                    </Button>
                    <IconButton variant="text">
                        <i className="se-user" />
                    </IconButton>
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                        Sign In
                    </Button>
                    <Button variant="gradient" size="sm" fullWidth>
                        Sign Up
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
}