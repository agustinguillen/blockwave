import React from 'react';
import { motion } from 'framer-motion';
import { Typography, useTheme, useMediaQuery } from '@mui/material';

interface Props {
    text: string;
    delay?: number;
    icon?: React.ReactNode;
}

export const TypingText = ({ text, icon, delay }: Props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const typingVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.01,
                delay: delay ? delay : 0.01,
                staggerChildren: 0.01,
                when: 'beforeChildren',
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const characters = text.split('');

    return (
        <Typography
            component={motion.div}
            variants={typingVariants}
            initial="hidden"
            animate="visible"
            sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: isMobile ? '0.8rem' : '1.2rem',
                marginBottom: '1.5%',
                zIndex: 20
            }}
        >
            {icon}
            {characters.map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </Typography>
    );
};


