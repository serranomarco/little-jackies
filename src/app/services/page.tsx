import ServicesContent from '@/components/ServicesContent'
import { Button } from '@mui/material'
import Link from 'next/link'

const Services = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <ServicesContent />
            <Link href="/contact" passHref>
                <div className="flex justify-center">
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#478BBC',
                            borderRadius: 50,
                            margin: '32px 0',
                            fontFamily: 'var(--font-roboto)',
                            fontWeight: 100,
                        }}
                    >
                        Schedule a cleaning today!
                    </Button>
                </div>
            </Link>
        </div>
    )
}

export default Services
