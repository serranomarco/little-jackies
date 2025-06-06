import { Typography, Stack, IconButton, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
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
            <Typography variant="h6" gutterBottom>
                Little Jackie's Cleaning Service
            </Typography>

            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 2 }}
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

            <Typography variant="body2" component="p">
                Serving Portland, Oregon and surrounding areas
            </Typography>

            <Typography variant="body2" sx={{ mt: 1 }}>
                &copy; {new Date().getFullYear()} Little Jackie's Cleaning
                Service. All rights reserved.
            </Typography>
        </Box>
    )
}

export default Footer
