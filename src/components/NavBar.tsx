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
import { useState, useEffect } from 'react'
import logoPic from '../../public/logo.png'
import { usePathname } from 'next/navigation'

const pages = [
    { tab: 'home', path: '' },
    { tab: 'about', path: 'about' },
    { tab: 'services', path: 'services' },
    { tab: 'contact us', path: 'contact' },
]

const LogoButton = () => (
    <Box className="h-16 flex items-center">
        <Link href="/" passHref>
            <Image
                src={logoPic}
                alt="Little Jackie's logo"
                height={64}
                style={{ padding: '8px' }}
                className="object-contain"
            />
        </Link>
    </Box>
)

const DesktopNav = () => {
    const pathname = usePathname()
    const isHome = pathname === '/'
    return (
        <Box className="flex justify-between items-center w-full">
            <LogoButton />
            <Box className="flex gap-4 relative">
                {pages.map((page) => (
                    <Box key={page.tab} className="relative group">
                        <Button
                            href={`/${page.path}`}
                            component={Link}
                            sx={{
                                color: isHome ? 'white' : 'black',
                                backgroundColor: 'transparent',
                                fontFamily: 'var(--font-roboto)',
                                fontWeight: 100,
                                px: 2,
                            }}
                        >
                            {page.tab}
                        </Button>
                        <Box
                            className={`absolute left-0 bottom-0 w-full h-[2px] ${
                                isHome ? 'bg-white' : 'bg-black'
                            } scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
                        />
                    </Box>
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
    const [showNav, setShowNav] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY < 50 || currentScrollY < lastScrollY) {
                setShowNav(true)
            } else {
                setShowNav(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <NoSsr>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
                    transition: 'transform 0.3s ease-in-out',
                }}
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
