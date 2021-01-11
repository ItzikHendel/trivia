import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Result () {
    return (
        <Typography component="div" style={{ backgroundColor: '' }} >
        <Box bgcolor="success.main" color="success.contrastText" p={2}>Correct!</Box>
        </Typography>
    )
}