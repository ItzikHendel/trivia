import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Summary({ gameData }) {
    return (
        <Container>
            <Typography variant="h1">          
                <Box display="flex" justifyContent="center">                   
                    <Box component="span" color="white" bgcolor="palevioletred" borderRadius={60} p={1}>3/10</Box>
                </Box>
            </Typography>
        </Container>

    )
}