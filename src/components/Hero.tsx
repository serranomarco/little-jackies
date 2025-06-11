import { Box, Button, Container } from '@mui/material'
import Image from 'next/image'
import heroImage from '../../public/clean_kitchen.jpg'
import Link from 'next/link'

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
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins">
                        Little Jackie's
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl mt-2 font-poppins">
                        Cleaning Service
                    </h2>
                    <Link href="/contact" passHref>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#478BBC',
                                width: '164px',
                                borderRadius: 50,
                                margin: '32px 0',
                                fontFamily: 'var(--font-roboto)',
                                fontWeight: 100,
                            }}
                        >
                            Get a quote
                        </Button>
                    </Link>
                </Container>
            </Box>
        </Box>
    )
}

export default Hero
