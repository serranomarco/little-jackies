import ContactForm from '@/components/ContactForm'
import { Container } from '@mui/material'

const Contact = () => {
    return (
        <Container maxWidth="sm" sx={{ py: 4 }}>
            <h3 className="text-5xl font-poppins">Get in Touch</h3>
            <p className="my-4 font-thin text-lg">
                Ready to schedule your next cleaning or have questions about our
                services? We’d love to help! Fill out the form below, and we’ll
                get back to you promptly.
            </p>
            <ContactForm />
        </Container>
    )
}

export default Contact
