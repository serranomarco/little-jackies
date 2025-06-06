'use client'

import Image from 'next/image'
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    useMediaQuery,
    useTheme,
    NoSsr,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import { useState } from 'react'
import profilePic from '../../public/IMG_3519.jpg'
import { usePathname } from 'next/navigation'

const pages = [
    { tab: 'home', path: '' },
    { tab: 'about', path: 'about' },
    { tab: 'services', path: 'projects' },
    { tab: 'contact us', path: 'contact' },
]

const LogoButton = () => (
    <Box className="h-16 flex items-center">
        <Image
            src={profilePic}
            alt="Little Jackie's logo"
            height={64}
            className="object-contain"
        />
    </Box>
)

const DesktopNav = () => {
    const pathname = usePathname()
    const isHome = pathname === '/'
    return (
        <Box className="flex justify-between items-center w-full">
            <LogoButton />
            <Box className="flex gap-4">
                {pages.map((page) => (
                    <Button
                        key={page.tab}
                        href={`/${page.path}`}
                        component={Link}
                        className="text-white normal-case hover:bg-white/10"
                        sx={{
                            color: isHome ? 'white' : 'black',
                            fontFamily: 'var(--font-roboto)',
                            fontWeight: 100,
                        }}
                    >
                        {page.tab}
                    </Button>
                ))}
            </Box>
        </Box>
    )
}

const MobileNav = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
    const pathname = usePathname()
    const isHome = pathname === '/'

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <Box className="flex items-center w-full relative justify-between">
            <IconButton
                size="large"
                aria-label="navbar"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ px: 0, color: isHome ? 'white' : 'black' }}
            >
                <MenuIcon />
            </IconButton>

            <Box className="absolute left-1/2 transform -translate-x-1/2">
                <LogoButton />
            </Box>

            <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: '#e1e5f2',
                            borderRadius: 2,
                            boxShadow: 4,
                            mt: 1,
                            minWidth: 160,
                        },
                    },
                }}
            >
                {pages.map((page) => (
                    <MenuItem key={page.tab} onClick={handleCloseNavMenu}>
                        <Button
                            href={`/${page.path}`}
                            component={Link}
                            color="inherit"
                            className="text-black normal-case hover:bg-white/10 w-full justify-start"
                        >
                            {page.tab}
                        </Button>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

const NavBar = () => {
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <NoSsr>
            <AppBar
                position="absolute"
                sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters className="h-16 px-4">
                        {isDesktop ? <DesktopNav /> : <MobileNav />}
                    </Toolbar>
                </Container>
            </AppBar>
        </NoSsr>
    )
}

export default NavBar
