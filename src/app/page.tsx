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
                    fontFamily: 'var(--font-roboto)',
                    fontWeight: 100,
                }}
            >
                Get a quote
            </Button>
        </Box>
    )
}

const HomePageContent = () => {
    return (
        <div className="max-w-3xl px-4 py-8 mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins text-center mb-8">
                Why Choose Us?
            </h2>

            <div className="flex items-center mb-2">
                <AttachMoneyIcon className="text-[#478BBC] mr-2" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins m-0">
                    Affordable Rates:
                </h3>
            </div>
            <p className="text-base sm:text-lg md:text-xl font-roboto font-thin leading-relaxed">
                Quality cleaning that fits your budget — no surprises, just
                great value.
            </p>

            <div className="flex items-center mt-6 mb-2">
                <AccessTimeIcon className="text-[#478BBC] mr-2" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins m-0">
                    Next-Day Service:
                </h3>
            </div>
            <p className="text-base sm:text-lg md:text-xl font-roboto font-thin leading-relaxed">
                Need it cleaned fast? We offer reliable next-day appointments to
                fit your schedule.
            </p>

            <div className="flex items-center mt-6 mb-2">
                <PhoneIcon className="text-[#478BBC] mr-2" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins m-0">
                    Easy Scheduling:
                </h3>
            </div>
            <p className="text-base sm:text-lg md:text-xl font-roboto font-thin leading-relaxed">
                Just give us a call to book your cleaning — simple, personal,
                and hassle-free.
            </p>
        </div>
    )
}
