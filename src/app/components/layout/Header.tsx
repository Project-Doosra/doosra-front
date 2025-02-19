// Using MaterialUI's AppBar component to achieve automatic responsiveness.
"use client"

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
import {useState } from "react";
import { HiMenu } from "react-icons/hi";

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

  const pages = ["Home", "Matches", "Profile"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  return (
    // https://mui.com/material-ui/api/app-bar/
    // https://developer.mozilla.org/en-US/docs/Web/CSS/position
    // TODO theming using TailwindCSS / Material UI for default colors
    <AppBar position="sticky" color="transparent" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <Image
              src={SampleLogo} 
              alt="Doosra dummy logo"
              width={160}
              height={160}
            />
          </Link>
          {/* Mobile screen menu - TODO replace with drawer or sidebar */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <HiMenu />
            </IconButton> 
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
          </Box>
          {/* TODO - Center on mobile screens */}
          {/* Mobile Screen Logo */}
          <Link href="/" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <Image
              src={SampleLogo}
              alt="Doosra dummy logo"
              width={160}
              height={160}
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* TODO - style better */}
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* TODO User - replace with search */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
