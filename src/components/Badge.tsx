import { Box, useTheme, useMediaQuery } from "@mui/material"
import { TypingText } from "./TypingText"
import { Reveal } from "./Reveal"

interface Props {
    icon: React.ReactNode
    text: string
    delay?: number
}

export const Badge = ({icon, text, delay}: Props) => {

    return (
        <Reveal delay={delay ? delay : 1}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    padding: '20px 0'
                }}
            >
                {icon}
                <TypingText text={text} delay={delay} />
            </Box>
        </Reveal>
    )
}