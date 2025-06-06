import Hero from '@/components/Hero'
import { Box, Button, Container, NoSsr, Typography } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PhoneIcon from '@mui/icons-material/Phone'

export default function Home() {
    return (
        <Box className="flex flex-col items-center">
            <NoSsr>
                <Hero />
            </NoSsr>
            <NoSsr>
                <Box mt={4}>
                    <HomePageContent />
                </Box>
            </NoSsr>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#478BBC',
                    width: '164px',
                    borderRadius: 50,
                    margin: '32px 0',
                }}
            >
                Get a quote
            </Button>
        </Box>
    )
}

const HomePageContent = () => {
    const sectionTitleStyles = {
        fontSize: {
            xs: '1.8rem',
            sm: '2.2rem',
            md: '2.5rem',
        },
        mb: 4,
        textAlign: 'center',
        fontFamily: 'font-family: var(--font-poppins)',
    }

    const headingStyles = {
        fontSize: {
            xs: '1.2rem',
            sm: '1.4rem',
            md: '1.6rem',
        },
        m: 0,
        fontFamily: 'font-family: var(--font-poppins)',
    }

    const bodyStyles = {
        fontSize: {
            xs: '1rem',
            sm: '1.1rem',
            md: '1.2rem',
        },
        lineHeight: 1.6,
        fontFamily: 'var(--font-roboto)',
        fontWeight: 100,
    }

    return (
        <Container maxWidth="md" sx={{ p: 4 }}>
            <Typography variant="h3" sx={sectionTitleStyles}>
                Why Choose Us?
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <AttachMoneyIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h4" sx={headingStyles}>
                    Affordable Rates:
                </Typography>
            </Box>
            <Typography variant="body1" sx={bodyStyles}>
                Quality cleaning that fits your budget — no surprises, just
                great value.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 1 }}>
                <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h4" sx={headingStyles}>
                    Next-Day Service:
                </Typography>
            </Box>
            <Typography variant="body1" sx={bodyStyles}>
                Need it cleaned fast? We offer reliable next-day appointments to
                fit your schedule.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 1 }}>
                <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h4" sx={headingStyles}>
                    Easy Scheduling:
                </Typography>
            </Box>
            <Typography variant="body1" sx={bodyStyles}>
                Just give us a call to book your cleaning — simple, personal,
                and hassle-free.
            </Typography>
        </Container>
    )
}
