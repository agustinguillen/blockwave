import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface Props {
    children: JSX.Element
    width?: 'fit-content' | '100%'
    block?: boolean
    blockColor?: string
    delay?: number
}

export const Reveal = ({children, width = 'fit-content', block, blockColor, delay}: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
            slideControls.start('visible')
        }
    }, [isInView])

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden', minHeight:'fit-content' }}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }}
                initial='hidden'
                animate={mainControls}
                transition={{
                    duration: 0.5, delay: delay ? delay : 0.5
                }}
            >{children}</motion.div>
            { block &&
                <motion.div
                    variants={{
                        hidden: {left: 0},
                        visible: {left: '100%'}
                    }}
                    initial='hidden'
                    animate={slideControls}
                    transition={{
                        duration: 0.5, ease: 'easeIn'
                    }}
                    style={{
                        position: 'absolute',
                        top: 4,
                        bottom: 4,
                        left: 0,
                        right: 0,
                        background: blockColor ? blockColor: '#FFF',
                        zIndex: 20
                    }}
                />
            }
        </div>
    )
}