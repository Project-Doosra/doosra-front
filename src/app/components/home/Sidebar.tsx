import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton } from "@mui/joy";
import { Avatar, Container } from "@mui/material";
import Image from "next/image";
import { IconType } from "react-icons";
import { PiUserLight } from "react-icons/pi";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import BouncingBall from "../search/BouncingBall";
import SampleLogo from "../../../../public/doosra.svg";
import Link from "next/link";

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    pages: { title: string; url: string, icon: IconType }[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, pages }) => {


    const toggleDrawer =
        (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
            setIsOpen(inOpen);
        };

    return (
        <Box sx={{ display: 'flex'  }}>
            <Drawer open={isOpen} onClose={toggleDrawer(false)}>
                <Container disableGutters className="sidebar-login px-3 flex bg-[#074799] !pl-8 py-3 justify-between">
                    <Avatar
                        sx={{ width: 45, height: 45, bgcolor: 'white' }}
                    >
                        <PiUserLight size={32} color="black" />
                    </Avatar>
                    <Container>
                        <span className="text-white font-semibold pl-3">Sign In</span>
                    </Container>
                    <RiArrowRightDoubleLine color="white" size={45} />
                </Container>
                <Container disableGutters className="bg-[#DFF0F8] h-full flex flex-col justify-between">

                    <Box
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                        className="bg-white mt-6 mx-3 rounded-[1.5rem]"
                    >

                        <List>
                            {pages.map((page) => (
                                <ListItem
                                    key={page.title}
                                    sx={{
                                        borderBottom: pages[pages.length - 1].title === page.title ? 'none' : '#DFF0F8 1px solid'
                                    }}
                                >
                                    {page.icon}
                                    <ListItemButton className="!font-semibold">{page.title}</ListItemButton>
                                    <RiArrowRightDoubleLine color="black" size={25} />
                                </ListItem>
                            ))}
                        </List>

                    </Box>
                    <Container disableGutters className="flex flex-col gap-6">
                        <BouncingBall />
                        <Container disableGutters className="flex justify-center bg-[#074799] py-3">
                            <Link href="/">
                                <Image
                                    src={SampleLogo}
                                    alt="Doosra dummy logo"
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </Link>
                        </Container>
                    </Container>

                </Container>

            </Drawer>
        </Box>
    );
};

export default Sidebar;