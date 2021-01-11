import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Result({ answerStatus }) {
    const resultMsg = answerStatus === "notSelected" ? null :
        (answerStatus === 'correct' ?
            <Box bgcolor="success.main" color="success.contrastText" p={2}>Correct!</Box> :
            <Box bgcolor="error.main" color="error.contrastText" p={2}>Wrong!</Box>
        );
    return (
        <Typography component="div" style={{ backgroundColor: '' }} > {resultMsg} </Typography>
    )
}