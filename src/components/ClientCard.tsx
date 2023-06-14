import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Company } from '../types/company';
import { Box } from '@mui/material';

interface Props {
    company: Company;
}

export const ClientCard = ({ company }: Props) => {
  const styles = {
    card: {
        background: 'radial-gradient(circle, rgba(11,0,20,1) 0%, rgba(121,0,105,1) 0%, rgba(42,0,61,1) 100%)',
        color: 'white',
        minWidth: '280px'
    },
    cardContent: {
        background: 'radial-gradient(circle, rgba(11,0,20,1) 0%, rgba(121,0,105,1) 0%, rgba(42,0,61,1) 100%)',
    }
  }
  return (
    <Card sx={styles.card}>
      <CardContent style={styles.cardContent}>
        <Box width='100%' sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img 
            src={company?.logo}
            alt={`${company?.logo} logo`}
            width='50'
            height='50'
            style={{
              borderRadius: '100%',
              marginRight: '10px',
            }}
          />
          <Typography variant="h5" component="div">
            {company?.name}
          </Typography>
        </Box>
        <Typography variant="body2" color="#ADB9E3" style={{ marginBottom: '15px', marginTop: '15px', fontSize: '0.7rem' }}>
            {company?.testimonial}
        </Typography>
        <Typography variant="body2" color="white">
            {company?.person}
        </Typography>
        <Typography variant="body2" color="#ADB9E3">
            {company?.position}
        </Typography>
      </CardContent>
    </Card>
  );
}