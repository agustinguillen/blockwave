import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';

interface Props {
    title: string
}

export const SectionTitle = ({title}: Props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const styles = {
        text: {
            fontSize: '1.5rem',
            color: '#FFFF00',
            textAlign: 'center',
            marginTop: '5vh',
        }
    };
    return (
        <Typography sx={styles.text}>{title}</Typography>
    )
}