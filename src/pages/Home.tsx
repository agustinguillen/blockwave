import { Container, Typography, Box, useMediaQuery, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Reveal } from '../components/Reveal';
import { MainButton } from '../components/MainButton';
import { StarsCanvas } from '../components/canvas/index'


const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            height: '100vh',
            position: 'relative',
        },
        background: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
        },
        illustration: {
            width: '30vw',
        },
        titleText: {
            fontSize: isMobile ? '2rem' : '4rem',
        },
        text: {
            marginTop: '5vh',
            fontSize: isMobile ? '1rem' : '1.2rem',
            width: isMobile ? '85vw' : '70vw'
        },
        brand: {
            background: 'linear-gradient(45deg, #FFA500, #FFFF00)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: '600',
            fontSize: isMobile ? '3rem' : '6rem',
        },
    };

    return (
        <>
            <Box style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
            }}>
                <StarsCanvas />
            </Box>
            <Container sx={styles.container}>
                <Box style={{ paddingTop: '10vh' }}>
                    <Reveal block>
                        <Typography sx={styles.titleText} variant="h2" component="h2">
                            Build the future with
                        </Typography>
                    </Reveal>
                    <Reveal block blockColor='#FFFF00'>
                        <Typography sx={styles.brand} variant="h1" component="h1" color="secondary">
                            BlockWave
                        </Typography>
                    </Reveal>
                    <Reveal block>
                        <Typography sx={styles.text} variant="p" component="p">
                            BlockWave is your ultimate partner in driving startup success. As a premier development company incubator, we offer comprehensive services, from cutting-edge software development to strategic consulting and investment guidance. Unleash your startup's potential with BlockWave and pave the way to digital prosperity.
                        </Typography>
                    </Reveal>
                </Box>
                <Box style={{ marginTop: '5vh', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <MainButton>Get Started Now</MainButton>
                </Box>
            </Container>
        </>
    );
};

export default Home;
