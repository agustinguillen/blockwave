import { Button } from "@mui/material"

interface Props {
    children: string | number | React.ReactNode
    onClick: () => void
}

export const MainButton = ({ children, onClick }: Props) => {
    const styles = {
        fontWeight: '600',
        fontFamily: 'Lexend'
    }
    return (
        <Button style={styles} variant="contained" color='primary' onClick={onClick}>
            {children}
        </Button>
    )
}