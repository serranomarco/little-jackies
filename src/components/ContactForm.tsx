'use client'

import { useForm, ValidationError } from '@formspree/react'
import { Box, Button, TextField, Typography } from '@mui/material'

const ContactForm = () => {
    const [state, handleSubmit] = useForm('mldbvkbl')
    if (state.succeeded) {
        return (
            <Typography>
                Thanks for reaching out! I'll get back to you within 2 business
                days.
            </Typography>
        )
    }
    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: 'inherit',
                mx: 'auto',
                my: 4,
            }}
        >
            <TextField
                id="email"
                label="Your Email Address"
                name="email"
                variant="filled"
                placeholder="e.g. name@example.com"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <TextField
                id="phoneNumber"
                label="Your Phone Number"
                name="phoneNumber"
                variant="filled"
                placeholder="e.g. 5035551234"
            />
            <ValidationError
                prefix="Phone Number"
                field="phoneNumber"
                errors={state.errors}
            />
            <TextField
                id="message"
                name="message"
                label="How can I help you?"
                multiline
                rows={4}
                variant="filled"
                placeholder="I'm looking for help building a custom web app..."
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />

            <Button
                variant="contained"
                type="submit"
                disabled={state.submitting}
                sx={{
                    backgroundColor: '#478BBC',
                    borderRadius: 50,
                    fontFamily: 'var(--font-roboto)',
                    fontWeight: 100,
                }}
            >
                Send Message
            </Button>
        </Box>
    )
}

export default ContactForm
