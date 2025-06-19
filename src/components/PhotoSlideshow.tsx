'use client'

import { Grid, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const cleaningPhotosSets = [
    ['/slideshow1.jpeg', '/slideshow22.JPG', '/slideshow3.jpeg'],
    ['/slideshow4.jpeg', '/slideshow20.JPG', '/slideshow6.jpeg'],
    ['/slideshow7.jpeg', '/slideshow8.jpeg', '/slideshow9.jpeg'],
    ['/slideshow10.jpeg', '/slideshow11.JPG', '/slideshow12.JPG'],
    ['/slideshow13.JPG', '/slideshow14.JPG', '/slideshow15.JPG'],
    ['/slideshow16.JPG', '/slideshow17.JPG', '/slideshow18.JPG'],
    ['/slideshow19.JPG', '/slideshow20.JPG', '/slideshow21.JPG'],
    ['/slideshow22.JPG', '/slideshow23.jpg', '/slideshow24.jpeg'],
    ['/slideshow25.jpeg', '/slideshow26.jpeg', '/slideshow27.jpeg'],
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
        <Grid container spacing={0.5} mx={1}>
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
