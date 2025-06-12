import PhotoSlideshow from '@/components/PhotoSlideshow'
import { Box, Button, Container } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PhoneIcon from '@mui/icons-material/Phone'
import employeeImage from '../../../public/IMG_3519.jpg'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
    return (
        <>
            <AboutUsContent />
            <Container maxWidth="sm">
                <PhotoSlideshow />
            </Container>
            <WhyChooseUsContent />
            <Link href="/contact" passHref>
                <div className="flex justify-center">
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
                </div>
            </Link>
        </>
    )
}

const AboutUsContent = () => {
    return (
        <div className="max-w-4xl px-4 py-10 mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins text-center mb-10">
                About Us
            </h2>
            <div className="flex flex-col md:flex-row justify-">
                <Image
                    src={employeeImage}
                    style={{
                        height: '100%',
                        borderRadius: '1%',
                        boxShadow: '2px 2px 2px rgb(0,0,0,0.1)',
                    }}
                    alt="Little Jackie's logo"
                    className="object-contain mb-4 md:mt-0 md:ml-6 mx-auto w-full max-w-xs"
                />
                <div className="mx-4">
                    <p className="text-base sm:text-lg md:text-lg font-thin leading-relaxed">
                        We are a proud family-owned cleaning compnay with years
                        of experience delivering reliable, high-quality cleaning
                        services. What started as a small family effort has
                        grown into a trusted name in the community, built on
                        hard work, attention to detail, and a true passion for
                        helping people keep their spaces clean and comfortable.
                    </p>
                    <p className="text-base sm:text-lg md:text-lg font-thin leading-relaxed mt-5">
                        With deep roots in the industry, our team brings years
                        of hands-on experience to every job - whether it's
                        residential, commercial, move-in/move-out or deep
                        cleaning. We treat every home and business like it's our
                        own and we take pride in building long-lasting
                        relationships with our clients.
                    </p>
                    <p className="text-base sm:text-lg md:text-lg font-thin leading-relaxed mt-5">
                        At the hear of everything we do is a commitment to
                        honesty, quality and care. When you choose us, you're
                        not just hiring a cleaning service, you're supporting a
                        local family business that genuinely values your trust.
                    </p>
                </div>
            </div>
        </div>
    )
}

const WhyChooseUsContent = () => {
    return (
        <div className="max-w-3xl px-4 py-10 mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins text-center mb-10">
                Why Choose Us?
            </h2>

            <p className="text-base sm:text-lg md:text-lg font-thin leading-relaxed mb-8">
                Everyone deserves a clean and comfortable space, whether it’s
                your home, your office, or your rental property. We're a local,
                family-owned business committed to providing reliable,
                affordable, and personalized cleaning services to the community
                we call home.
            </p>

            <Box className="flex items-start mb-6">
                <AttachMoneyIcon className="text-[#478BBC] mr-3 mt-1" />
                <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins m-0">
                        Affordable Pricing
                    </h3>
                    <p className="text-base sm:text-lg md:text-lg font-roboto font-thin leading-relaxed">
                        Our mission is to make professional cleaning accessible
                        to everyone. We offer transparent, competitive pricing
                        with no hidden fees, so you get exceptional service
                        without stretching your budget.
                    </p>
                </div>
            </Box>

            <Box className="flex items-start mb-6">
                <AccessTimeIcon className="text-[#478BBC] mr-3 mt-1" />
                <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins m-0">
                        Next-Day Cleaning
                    </h3>
                    <p className="text-base sm:text-lg md:text-lg font-roboto font-thin leading-relaxed">
                        Life moves fast, and sometimes you need a clean space
                        sooner rather than later. Our dependable next-day
                        cleaning option ensures you get the spotless home or
                        office you need, when you need it.
                    </p>
                </div>
            </Box>

            <Box className="flex items-start mb-6">
                <PhoneIcon className="text-[#478BBC] mr-3 mt-1" />
                <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins m-0">
                        Personalized Scheduling by Phone
                    </h3>
                    <p className="text-base sm:text-lg md:text-lg font-thin leading-relaxed">
                        We believe in the personal touch. Scheduling your
                        cleaning is as easy as a quick phone call. Our friendly
                        team will help find the best time that fits your busy
                        life. No stress, no confusion. Choosing us means you get
                        reliable, affordable, and convenient cleaning tailored
                        to your busy lifestyle. Let us take care of the mess so
                        you can focus on what matters most.
                    </p>
                </div>
            </Box>

            <p className="text-base sm:text-lg md:text-lg font-thin leading-relaxed mt-10">
                Letting someone into your space is a big deal. That’s why we
                approach every job with the utmost care and respect. When you
                hire Little Jackie’s, you’re not just getting a cleaning crew,
                you’re getting people who care about your peace of mind. We look
                forward to helping you make your space shine!
            </p>
        </div>
    )
}

export default About
