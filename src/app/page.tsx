import Hero from '@/components/Hero'
import { Box, Divider } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PhoneIcon from '@mui/icons-material/Phone'
import Contact from './contact/page'
import { MotionWrapper } from '@/components/utils/animations/MotionWrapper'
import ScrollToTop from '@/components/utils/ScrollToTop'
import PhotoSlideshow from '@/components/PhotoSlideshow'
import ServicesContent from '@/components/ServicesContent'

const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
}

export default function Home() {
    return (
        <Box className="flex flex-col items-center">
            <ScrollToTop />
            <Hero />
            <Box mt={4}>
                <HomePageContent />
                <PhotoSlideshow />
            </Box>

            <Divider sx={{ width: '75%', my: 4 }} />
            <MotionWrapper
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="max-w-6xl mx-auto px-4 py-10">
                    <ServicesContent />
                </div>
            </MotionWrapper>
            <Divider sx={{ width: '75%', my: 4 }} />
            <MotionWrapper
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <Contact />
            </MotionWrapper>
        </Box>
    )
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

const HomePageContent = () => {
    return (
        <MotionWrapper
            className="max-w-3xl px-4 py-8 mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins text-center mb-8 text-[#478BBC]">
                Why Choose Us?
            </h2>

            <MotionWrapper className="mb-6" variants={itemVariants}>
                <div className="flex items-center mb-2">
                    <AttachMoneyIcon className="text-[#478BBC] mr-2" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins m-0">
                        Affordable Rates:
                    </h3>
                </div>
                <p className="text-base sm:text-lg md:text-lg font-roboto font-thin leading-relaxed">
                    Quality cleaning that fits your budget — no surprises, just
                    great value.
                </p>
            </MotionWrapper>

            <MotionWrapper className="mb-6" variants={itemVariants}>
                <div className="flex items-center mb-2">
                    <AccessTimeIcon className="text-[#478BBC] mr-2" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins m-0">
                        Next-Day Service:
                    </h3>
                </div>
                <p className="text-base sm:text-lg md:text-lg font-roboto font-thin leading-relaxed">
                    Need it cleaned fast? We offer reliable next-day
                    appointments to fit your schedule.
                </p>
            </MotionWrapper>

            <MotionWrapper className="mb-6" variants={itemVariants}>
                <div className="flex items-center mb-2">
                    <PhoneIcon className="text-[#478BBC] mr-2" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins m-0">
                        Easy Scheduling:
                    </h3>
                </div>
                <p className="text-base sm:text-lg md:text-lg font-roboto font-thin leading-relaxed">
                    Just give us a call to book your cleaning — simple,
                    personal, and hassle-free.
                </p>
            </MotionWrapper>
        </MotionWrapper>
    )
}
