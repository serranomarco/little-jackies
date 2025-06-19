import { Box, Button, Container } from '@mui/material'
import Image from 'next/image'
import heroImage from '../../public/clean_kitchen.jpg'
import logoImage from '../../public/logo.png'
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
                    backgroundColor: 'rgba(0,0,0,0.3)',
                }}
            >
                <Container
                    maxWidth="md"
                    className="text-center flex items-center flex-col"
                >
                    <Box
                        sx={{
                            width: { xs: '150px', sm: '200px', md: '300px' },
                        }}
                    >
                        <Image
                            src={logoImage}
                            alt="Little Jackie's Logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            priority
                        />
                    </Box>
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
