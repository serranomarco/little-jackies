import { Box, Grid, Typography, Chip, Button } from '@mui/material'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import HomeIcon from '@mui/icons-material/Home'
import BusinessIcon from '@mui/icons-material/Business'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'

const services = [
    { label: 'Residential Cleaning', icon: <HomeIcon /> },
    { label: 'Deep Cleaning', icon: <CleaningServicesIcon /> },
    { label: 'Move-in/Move-out', icon: <MoveToInboxIcon /> },
    { label: 'Post-renovation Cleaning', icon: <CleaningServicesIcon /> },
    { label: 'Vacation Rental (Airbnb)', icon: <HomeIcon /> },
    { label: 'Office Cleaning', icon: <BusinessIcon /> },
    { label: 'Retail & Commercial Cleaning', icon: <BusinessIcon /> },
    { label: 'Apartment Common Areas', icon: <HomeIcon /> },
    { label: 'Real Estate Property Cleaning', icon: <BusinessIcon /> },
    {
        label: 'Appliance Cleaning (Oven, Fridge, Microwave)',
        icon: <CleaningServicesIcon />,
    },
    { label: 'Rental Turnover & Trash-out', icon: <MoveToInboxIcon /> },
    { label: 'Pre-sale or Staging Cleaning', icon: <CleaningServicesIcon /> },
]

const ServicesContent = () => {
    return (
        <>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins text-center mb-8">
                Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-thin text-center font-light mb-10">
                At Little Jackie’s, we offer a wide range of residential and
                commercial cleaning services tailored to fit your needs:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 p-4 rounded-xl border border-gray-200 bg-white shadow-sm"
                    >
                        <div className="text-[#478BBC]">{service.icon}</div>
                        <h3 className="font-poppins text-lg font-semibold">
                            {service.label}
                        </h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ServicesContent
