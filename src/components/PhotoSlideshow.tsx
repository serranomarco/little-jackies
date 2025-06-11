'use client'

import { Grid, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const cleaningPhotosSets = [
    ['/IMG_3519.jpg', '/IMG_3519.jpg', '/IMG_3519.jpg'],
    ['/clean_kitchen.jpg', '/IMG_3519.jpg', '/IMG_3519.jpg'],
    ['/IMG_3519.jpg', '/IMG_3519.jpg', '/IMG_3519.jpg'],
    ['/IMG_3519.jpg', '/IMG_3519.jpg', '/IMG_3519.jpg'],
    ['/IMG_3519.jpg', '/IMG_3519.jpg', '/IMG_3519.jpg'],
    ['/IMG_3519.jpg', '/IMG_3519.jpg', '/IMG_3519.jpg'],
    ['/IMG_3519.jpg', '/IMG_3519.jpg', '/IMG_3519.jpg'],
    ['/IMG_3519.jpg', '/IMG_3519.jpg', '/IMG_3519.jpg'],
    ['/IMG_3519.jpg', '/IMG_3519.jpg', '/IMG_3519.jpg'],
]

const getRandomDelay = () => 6000 + Math.random() * 6000

const PhotoSlideshow = () => {
    const [indexes, setIndexes] = useState(
        Array(cleaningPhotosSets.length).fill(0)
    )
    const [fadeFlags, setFadeFlags] = useState(
        Array(cleaningPhotosSets.length).fill(false)
    )

    useEffect(() => {
        const timeouts: NodeJS.Timeout[] = []

        cleaningPhotosSets.forEach((_, i) => {
            const scheduleNext = () => {
                const delay = getRandomDelay()
                const timeout = setTimeout(() => {
                    // trigger fade
                    setFadeFlags((prev) => {
                        const updated = [...prev]
                        updated[i] = true
                        return updated
                    })

                    setTimeout(() => {
                        // update image index
                        setIndexes((prev) => {
                            const updated = [...prev]
                            updated[i] =
                                (updated[i] + 1) % cleaningPhotosSets[i].length
                            return updated
                        })

                        // end fade
                        setFadeFlags((prev) => {
                            const updated = [...prev]
                            updated[i] = false
                            return updated
                        })

                        // schedule next
                        scheduleNext()
                    }, 500) // match fade duration
                }, delay)
                timeouts.push(timeout)
            }

            scheduleNext()
        })

        return () => {
            timeouts.forEach(clearTimeout)
        }
    }, [])

    return (
        <Grid container spacing={1}>
            {cleaningPhotosSets.map((set, i) => (
                <Grid key={i} size={{ xs: 4, sm: 4, md: 4 }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '1',
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src={set[indexes[i]]}
                            alt={`slideshow-${i}`}
                            fill
                            style={{
                                objectFit: 'cover',
                                transition: 'opacity 0.5s ease-in-out',
                                opacity: fadeFlags[i] ? 0 : 1,
                            }}
                        />
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}

export default PhotoSlideshow
