import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import heroImage from '../../public/clean_kitchen.jpg'

export const Hero = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: {
                    xs: '300px',
                    sm: '400px',
                    md: '500px',
                },
                overflow: 'hidden',
            }}
        >
            <Image
                src={heroImage}
                alt="Cleaning service hero"
                fill
                style={{ objectFit: 'cover' }}
                priority
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: 'rgba(0,0,0,0.3)', // optional dark overlay for readability
                }}
            >
                <Container maxWidth="md" className="text-center">
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: {
                                xs: '2rem',
                                sm: '3rem',
                                md: '4rem',
                            },
                            fontFamily: 'font-family: var(--font-poppins)',
                        }}
                    >
                        Little Jackie's
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: {
                                xs: '1.2rem',
                                sm: '1.8rem',
                                md: '2.2rem',
                            },
                            mt: 1,
                            fontFamily: 'font-family: var(--font-poppins)',
                        }}
                    >
                        Cleaning Service
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}

export default Hero
