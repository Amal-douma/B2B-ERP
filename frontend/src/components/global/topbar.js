// // import { motion } from "framer-motion";
// // import tw from "twin.macro";
// // import styled from "styled-components";
// // import { css } from "styled-components/macro"; //eslint-disable-line
// // import { Box, IconButton } from "@mui/material";
// // import SearchIcon from "@mui/icons-material/Search";
// // import InputBase from "@mui/material/InputBase";


// // import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
// // //  import logo from "../../images/logo.png";
// // import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
// // import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

// // const Header = tw.header`
// //   flex justify-between items-center
// //   max-w-screen-xl mx-auto
// // `;

// // export const NavLinks = tw.div`inline-block`;


// // export const NavLink = tw.a`
// //   text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
// //   font-semibold tracking-wide transition duration-300
// //   pb-1 border-b-2 border-transparent hover:border-blue-500 hocus:text-blue-500
// // `;

// // export const PrimaryLink = tw(NavLink)`
// //   lg:mx-0
// //   px-8 py-3 rounded bg-blue-500 text-gray-100
// //   hocus:bg-blue-700 hocus:text-gray-200 focus:shadow-outline
// //   border-b-0
// // `;

// // export const LogoLink = styled(NavLink)`
// //   ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

// //   img {
// //     ${tw`w-10 mr-3`}
// //   }
// // `;

// // export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;

// // export const NavToggle = tw.button`
// //   lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
// // `;

// // export const MobileNavLinks = motion(styled.div`
// //   ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
// //   ${NavLinks} {
// //     ${tw`flex flex-col items-center`}
// //   }
// // `);

// // export const DesktopNavLinks = tw.nav`
// //   hidden lg:flex flex-1 justify-between items-center
// // `;

// // export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {


// //     const defaultLinks = [
// //         <NavLinks key={1}>

// //             <NavLink href="/#">Produit</NavLink>
// //             <NavLink href="/#" tw="lg:ml-12!">
// //                 parametre
// //             </NavLink>
// //             <PrimaryLink style={{ borderRadius: "50px" }} css={roundedHeaderButton && tw`rounded-full`} href="/#">Se Déconnecter</PrimaryLink>
// //         </NavLinks>
// //     ];

// //     const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
// //     const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

// //     const defaultLogoLink = (
// //         <LogoLink href="/">
// //             {/* <img src={logo} alt="logo" /> */}
// //             Smart-BS
// //         </LogoLink>
// //     );

// //     logoLink = logoLink || defaultLogoLink;
// //     links = links || defaultLinks;

// //     return (

// //         <Header className={className || "header-light"}>

// //             <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>

// //                 {logoLink}
// //                 {/* SEARCH BAR */}
// //                 <Box
// //                     display="flex"
// //                     borderRadius="5px "
// //                     border= "1px   solid grey"

// //                 >
// //                     <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
// //                     <IconButton type="button" sx={{ p: 1}}>
// //                         <SearchIcon />
// //                     </IconButton>
// //                 </Box>

// //                 {links}

// //             </DesktopNavLinks>




// //             <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
// //                 {logoLink}
// //                 <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
// //                     {links}
// //                 </MobileNavLinks>
// //                 <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
// //                     {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
// //                 </NavToggle>
// //             </MobileNavLinksContainer>



// //         </Header>
// //     );
// // };


// // const collapseBreakPointCssMap = {
// //     sm: {
// //         mobileNavLinks: tw`sm:hidden`,
// //         desktopNavLinks: tw`sm:flex`,
// //         mobileNavLinksContainer: tw`sm:hidden`
// //     },
// //     md: {
// //         mobileNavLinks: tw`md:hidden`,
// //         desktopNavLinks: tw`md:flex`,
// //         mobileNavLinksContainer: tw`md:hidden`
// //     },
// //     lg: {
// //         mobileNavLinks: tw`lg:hidden`,
// //         desktopNavLinks: tw`lg:flex`,
// //         mobileNavLinksContainer: tw`lg:hidden`
// //     },
// //     xl: {
// //         mobileNavLinks: tw`lg:hidden`,
// //         desktopNavLinks: tw`lg:flex`,
// //         mobileNavLinksContainer: tw`lg:hidden`
// //     }
// // };



// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
// }));

// export default function PrimarySearchAppBar() {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//     const isMenuOpen = Boolean(anchorEl);
//     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//     const handleProfileMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMobileMenuClose = () => {
//         setMobileMoreAnchorEl(null);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//         handleMobileMenuClose();
//     };

//     const handleMobileMenuOpen = (event) => {
//         setMobileMoreAnchorEl(event.currentTarget);
//     };

//     const menuId = 'primary-search-account-menu';
//     const renderMenu = (
//         <Menu
//             anchorEl={anchorEl}
//             anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//             }}
//             id={menuId}
//             keepMounted
//             transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//             }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//         >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//         </Menu>
//     );

//     const mobileMenuId = 'primary-search-account-menu-mobile';
//     const renderMobileMenu = (
//         <Menu
//             anchorEl={mobileMoreAnchorEl}
//             anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//             }}
//             id={mobileMenuId}
//             keepMounted
//             transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//             }}
//             open={isMobileMenuOpen}
//             onClose={handleMobileMenuClose}
//         >
//             <MenuItem>
//                 <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//                     <Badge badgeContent={4} color="error">
//                         <MailIcon />
//                     </Badge>
//                 </IconButton>
//                 <p>Messages</p>
//             </MenuItem>
//             <MenuItem>
//                 <IconButton
//                     size="large"
//                     aria-label="show 17 new notifications"
//                     color="inherit"
//                 >
//                     <Badge badgeContent={17} color="error">
//                         <NotificationsIcon />
//                     </Badge>
//                 </IconButton>
//                 <p>Notifications</p>
//             </MenuItem>
//             <MenuItem onClick={handleProfileMenuOpen}>
//                 <IconButton
//                     size="large"
//                     aria-label="account of current user"
//                     aria-controls="primary-search-account-menu"
//                     aria-haspopup="true"
//                     color="inherit"
//                 >
//                     <AccountCircle />
//                 </IconButton>
//                 <p>Profile</p>
//             </MenuItem>
//         </Menu>
//     );

//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="open drawer"
//                         sx={{ mr: 2 }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="div"
//                         sx={{ display: { xs: 'none', sm: 'block' } }}
//                     >
//                         MUI
//                     </Typography>
//                     <Search>
//                         <SearchIconWrapper>
//                             <SearchIcon />
//                         </SearchIconWrapper>
//                         <StyledInputBase
//                             placeholder="Search…"
//                             inputProps={{ 'aria-label': 'search' }}
//                         />
//                     </Search>
//                     <Box sx={{ flexGrow: 1 }} />
//                     <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//                         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//                             <Badge badgeContent={4} color="error">
//                                 <MailIcon />
//                             </Badge>
//                         </IconButton>
//                         <IconButton
//                             size="large"
//                             aria-label="show 17 new notifications"
//                             color="inherit"
//                         >
//                             <Badge badgeContent={17} color="error">
//                                 <NotificationsIcon />
//                             </Badge>
//                         </IconButton>
//                         <IconButton
//                             size="large"
//                             edge="end"
//                             aria-label="account of current user"
//                             aria-controls={menuId}
//                             aria-haspopup="true"
//                             onClick={handleProfileMenuOpen}
//                             color="inherit"
//                         >
//                             <AccountCircle />
//                         </IconButton>
//                     </Box>
//                     <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="show more"
//                             aria-controls={mobileMenuId}
//                             aria-haspopup="true"
//                             onClick={handleMobileMenuOpen}
//                             color="inherit"
//                         >
//                             <MoreIcon />
//                         </IconButton>
//                     </Box>
//                 </Toolbar>
//             </AppBar>
//             {renderMobileMenu}
//             {renderMenu}
//         </Box>
//     );
// }