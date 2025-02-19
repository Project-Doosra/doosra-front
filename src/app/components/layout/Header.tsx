// Using MaterialUI's AppBar component to achieve automatic responsiveness.
"use client";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import SampleLogo from "../../../../public/doosra.svg";
import Image from "next/image";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { PiUserLight } from "react-icons/pi";
import SearchBar from "./SearchBar";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = ["Home", "Players", "Teams", "Blogs"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  return (
    // https://mui.com/material-ui/api/app-bar/
    // https://developer.mozilla.org/en-US/docs/Web/CSS/position
    // TODO theming using TailwindCSS / Material UI for default colors
    <AppBar
      position="sticky"
      className="!bg-[#F5F9FC] md:!bg-[#074799] !shadow-none md:!shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
      enableColorOnDark
    >
      <Container maxWidth="false" className="!mx-auto !px-8 md:!px-12">
        <Toolbar disableGutters>
          <Link href="/" className="!mr-auto hidden md:block">
            <Image
              src={SampleLogo}
              alt="Doosra dummy logo"
              width={160}
              height={160}
            />
          </Link>
          <div className="md:ml-16 hidden md:block">
            <SearchBar type="basic" placeholder="Search" />
          </div>
          {/* Mobile screen menu - TODO replace with drawer or sidebar */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
            }}
          >
            <IconButton
              size="medium"
              edge="start"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <HiMenu color="black" size={32} />
            </IconButton>

            {/* TODO - Center on mobile screens */}
            {/* Mobile Screen Logo */}

            <Link
              href="/"
              sx={{
                display: { xs: "flex", md: "none" },
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Image
                src={SampleLogo}
                alt="Doosra dummy logo"
                width={160}
                height={160}
              />
            </Link>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: "center" }}>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="justify-center gap-8"
          >
            {/* TODO - style better */}
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  color: "white",
                  textTransform: "none",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}
                variant="text"
                size="medium"
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Button
              variant="text"
              startIcon={<PiUserLight size={30} />}
              sx={{
                textTransform: "none",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "600",
              }}
              onClick={handleOpenUserMenu}
            >
              Profile
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
