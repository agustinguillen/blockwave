import { Box, Typography } from "@material-ui/core"
import BlockwaveLogo from '../assets/blockwave.png'

interface Props {
    withBrand?: boolean
    textVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    width?: string | number
}

export const MainLogo = ({ withBrand, textVariant, width }: Props) => {
    const styles = {
        logoContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'fit-content'
        }
    }
    return (
        <Box style={styles.logoContainer}>
            <img src={BlockwaveLogo} alt='BlockWave logo' width={width ? width : 30} height={'auto'} loading="lazy" />
            {withBrand && <Typography variant={textVariant ? textVariant : 'h6'} component={textVariant ? textVariant : 'h6'} style={{ marginLeft: 10 }}>BlockWave</Typography>}
        </Box>
    )
}