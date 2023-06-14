import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';

interface Props {
    text: string
}

export const SectionParagraph = ({text}: Props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const styles = {
        text: {
            fontSize: isMobile ? '0.8rem' : '0.9rem',
            marginTop: '3vh',
            textAlign: 'center'
        }
    };
    return (
        <Typography sx={styles.text}>{text}</Typography>
    )
}