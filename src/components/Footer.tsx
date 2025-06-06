import { Typography, Stack, IconButton, Box } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import Link from 'next/link'

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                textAlign: 'center',
                py: 4,
                px: 2,
                backgroundColor: '#478BBC',
                color: '#fff',
                fontSize: '0.9rem',
                lineHeight: 1.6,
            }}
        >
            <h6 className="mb-2">Little Jackie's Cleaning Service</h6>

            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 2, fontFamily: 'var(--font-roboto)' }}
            >
                <Link
                    href="/"
                    style={{ color: '#fff', textDecoration: 'underline' }}
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    style={{ color: '#fff', textDecoration: 'underline' }}
                >
                    About
                </Link>
                <Link
                    href="/projects"
                    style={{ color: '#fff', textDecoration: 'underline' }}
                >
                    Services
                </Link>
                <Link
                    href="/contact"
                    style={{ color: '#fff', textDecoration: 'underline' }}
                >
                    Contact
                </Link>
            </Stack>

            <Stack
                direction="row"
                spacing={1.5}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 1 }}
            >
                <IconButton
                    component="a"
                    href="mailto:serranomarco@hotmail.com"
                    sx={{ color: '#fff', p: 0.5 }}
                >
                    <EmailIcon fontSize="small" />
                </IconButton>
                <IconButton
                    component="a"
                    href="tel:+15035550123"
                    sx={{ color: '#fff', p: 0.5 }}
                >
                    <PhoneIcon fontSize="small" />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/marco-serrano-3916731b2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#fff', p: 0.5 }}
                >
                    <LinkedInIcon fontSize="small" />
                </IconButton>
            </Stack>

            <p className="text-sm">
                Serving Portland, Oregon and surrounding areas
            </p>

            <p className="text-sm mt-2">
                &copy; {new Date().getFullYear()} Little Jackie's Cleaning
                Service. All rights reserved.
            </p>
        </Box>
    )
}

export default Footer
