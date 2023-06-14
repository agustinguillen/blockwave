import { Box, Typography } from "@mui/material"
import BlockwaveLogo from '../assets/blockwave.png'

interface Props {
    withBrand?: boolean
    withSlogan?: boolean
    textVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    width?: string | number
}

export const MainLogo = ({ withBrand, withSlogan, textVariant, width }: Props) => {
    const styles = {
        logoContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'fit-content'
        },
        brandContainer: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 10
        },
    }
    return (
        <Box style={styles.logoContainer}>
            <img src={BlockwaveLogo} alt='BlockWave logo' width={width ? width : 30} height={'50px'} loading="lazy" style={{ height: 'auto' }} />
            <Box style={styles.brandContainer}>
                {withBrand && <Typography variant={textVariant ? textVariant : 'h5'} component={textVariant ? textVariant : 'h5'}>BlockWave</Typography>}
                {withSlogan && <Typography variant={textVariant ? textVariant : 'h6'} component={textVariant ? textVariant : 'h6'}>Building the future</Typography>}
            </Box>
        </Box>
    )
}