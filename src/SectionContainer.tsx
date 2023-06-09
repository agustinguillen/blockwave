import { Box, Container } from '@mui/material'
import { SectionIdEnum } from './types/section-id'

export interface SectionContainerProps {
    children: React.ReactNode
    sectionId: SectionIdEnum
}

export const SectionContainer = ({children, sectionId}: SectionContainerProps) => {

    return (
        <div id={sectionId} key={sectionId}>
            <Container>
                <Box minHeight='calc(100vh - 100px)' style={{ paddingTop: '100px' }}>
                    {children}
                </Box>
            </Container>
        </div>
    )
}