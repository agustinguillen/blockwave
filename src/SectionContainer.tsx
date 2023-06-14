import { Box, Container, useMediaQuery, useTheme } from '@mui/material'
import { SectionIdEnum } from './types/section-id'

export interface SectionContainerProps {
    children: React.ReactNode
    sectionId: SectionIdEnum
}

export const SectionContainer = ({children, sectionId}: SectionContainerProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div id={sectionId} key={sectionId}>
            <Container>
                <Box height='calc(100vh - 100px)' style={{ paddingTop: isMobile? '85px' : '13vh' }}>
                    {children}
                </Box>
            </Container>
        </div>
    )
}