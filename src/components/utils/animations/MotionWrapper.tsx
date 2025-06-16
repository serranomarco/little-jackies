'use client'
import React, { ReactNode, ElementType } from 'react'
import { motion, MotionProps } from 'framer-motion'

interface MotionWrapperProps extends MotionProps {
    component?: ElementType
    className?: string
    children?: ReactNode
}

export function MotionWrapper({
    component: Component = 'div',
    className,
    children,
    variants,
    initial,
    animate,
    whileInView,
    exit,
    custom,
    transition,
    viewport,
    ...rest
}: MotionWrapperProps) {
    const MotionComponent = motion.create(Component)

    return (
        <MotionComponent
            className={className}
            variants={variants}
            initial={initial}
            animate={animate}
            whileInView={whileInView}
            exit={exit}
            custom={custom}
            transition={transition}
            viewport={viewport}
            {...rest}
        >
            {children}
        </MotionComponent>
    )
}
