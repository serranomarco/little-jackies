import { Stack, Box } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import Link from 'next/link'

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                textAlign: 'center',
                mt: 4,
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
                    href="/services"
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
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 1, fontFamily: 'var(--font-roboto)' }}
            >
                <Stack direction="row" alignItems="center" spacing={1}>
                    <EmailIcon fontSize="small" />
                    <a
                        href="mailto:Littlejackiescleaning@gmail.com"
                        style={{ color: '#fff', textDecoration: 'none' }}
                    >
                        Littlejackiescleaning@gmail.com
                    </a>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <PhoneIcon fontSize="small" />
                    <a
                        href="tel:+19718880654"
                        style={{ color: '#fff', textDecoration: 'none' }}
                    >
                        (971) 888-0654
                    </a>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <FacebookIcon fontSize="small" />
                    <a
                        href="https://www.facebook.com/profile.php?id=61577707376333"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fff', textDecoration: 'none' }}
                    >
                        Visit us on Facebook!
                    </a>
                </Stack>
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
