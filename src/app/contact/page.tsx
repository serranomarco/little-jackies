import ContactForm from '@/components/ContactForm'
import { Container } from '@mui/material'

const Contact = () => {
    return (
        <div className="pt-20 flex-1">
            <Container maxWidth="sm">
                <h3 className="text-3xl font-semibold">Get in Touch</h3>
                <p className="my-4 font-thin">
                    Ready to schedule your next cleaning or have questions about
                    our services? We’d love to help! Fill out the form below,
                    and we’ll get back to you promptly.
                </p>
                <ContactForm />
            </Container>
        </div>
    )
}

export default Contact
