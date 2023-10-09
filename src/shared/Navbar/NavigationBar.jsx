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
    Input,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    UserCircleIcon,
    CubeTransparentIcon,
    Bars3Icon,
    XMarkIcon,
    FlagIcon,
    ChatBubbleOvalLeftIcon,
    UsersIcon,
    FolderIcon,
    Square3Stack3DIcon,
    RocketLaunchIcon,
    FaceSmileIcon,
    PuzzlePieceIcon,
    GiftIcon,
    MagnifyingGlassIcon,
    HeartIcon,
    PowerIcon,
    InboxArrowDownIcon,
    Cog6ToothIcon,
    LifebuoyIcon,
} from "@heroicons/react/24/outline";

const colors = {
    blue: "bg-blue-50 text-blue-500",
    orange: "bg-orange-50 text-orange-500",
    green: "bg-green-50 text-green-500",
    "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
    purple: "bg-purple-50 text-purple-500",
    teal: "bg-teal-50 text-teal-500",
    cyan: "bg-cyan-50 text-cyan-500",
    pink: "bg-pink-50 text-pink-500",
};

const navListMenuItems = [
    {
        color: "blue",
        icon: FlagIcon,
        title: "About us",
        description: "Learn about our story and our mission statement.",
    },
    {
        color: "orange",
        icon: ChatBubbleOvalLeftIcon,
        title: "Press",
        description: "News and writings, press releases, and resources",
    },
    {
        color: "green",
        icon: UsersIcon,
        title: (
            <div className="flex items-center gap-1">
                Careers{" "}
                <Chip
                    size="sm"
                    color="green"
                    variant="ghost"
                    value="We're hiring!"
                    className="capitalize"
                />
            </div>
        ),
        description: "We are always looking for talented people. Join us!",
    },
    {
        color: "blue-gray",
        icon: FolderIcon,
        title: "Legal",
        description: "All the stuff that we dan from legal made us add.",
    },
    {
        color: "purple",
        icon: RocketLaunchIcon,
        title: "Products",
        description: "Checkout our products that helps a startup running.",
    },
    {
        color: "teal",
        icon: FaceSmileIcon,
        title: "Icons",
        description: "Set of beautiful icons that you can use in your project.",
    },
];

const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(
        ({ icon, title, description, color }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center rounded-none px-3 py-4">
                    {/* <div className={`rounded-lg p-5 ${colors[color]}`}>
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 w-6",
                        })}
                    </div> */}
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
            </a>
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
                <MenuHandler className=''>
                    <Typography as="div" variant="small" className="font-normal">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            {/* <Square3Stack3DIcon className="h-[18px] w-[18px]" /> */}
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
                    <ul className="grid grid-cols-2">{renderItems}</ul>
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
        <List className="mt-4 ml-8 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <NavListMenu />
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-normal"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Events
                </ListItem>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-normal"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Shop
                </ListItem>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-normal"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Resources
                </ListItem>
            </Typography>
        </List>
    );
}

export function NavigationBar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <Navbar className="lg:px-52 mx-auto max-w-full shadow-none border-[#171A21] border-opacity-5 lg:py-5 border-0 rounded-none border-b-2 px-4 py-6">
            <div className="flex items-center justify-between  text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h3"
                    className="mr-4 cursor-pointer text-2xl py-1.5"
                >
                    shob<span className="text-[#0597F2]">event</span>
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden ml-3 gap-2 lg:flex">
                    <div className="relative rounded-full bg-transparent border w-2/4 flex items-center">
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-full h-full p-1 pl-10 rounded-full bg-transparent placeholder:text-[#aaaaaa] "
                        />
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                            <MagnifyingGlassIcon className="h-5 w-5 text-[#aaaaaa]" />
                        </div>
                    </div>
                    <IconButton variant="text">
                        {/* <i className="fas fa-heart" /> */}
                        <HeartIcon className="h-5 w-5" />
                    </IconButton>
                    <Button size="sm"
                        className="hidden lg:inline-block rounded-full font-medium normal-case bg-[#0597F2] text-sm px-6">
                        Post a project
                    </Button>

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
                    <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
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