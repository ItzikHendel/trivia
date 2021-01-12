import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Result({ isAnswerCorrect, correctAnswer }) {
    if (isAnswerCorrect === null)
        return null;
    const correctAnswerMsg = <Box bgcolor="success.main" color="success.contrastText" p={2}>Correct!</Box>;
    const wrongAnswerMsg = (<>
        <Box bgcolor="error.main" color="error.contrastText" p={2}>Wrong!</Box>
        <br />
        <Box color="primary.main" boxShadow={1}>The correct answer is: <b>{correctAnswer}</b></Box>
    </>);
    const resultMsg = isAnswerCorrect ? correctAnswerMsg : wrongAnswerMsg;
    return (
        <>
            <br />
            <Typography component="div" variant="h6" style={{ backgroundColor: '' }} > {resultMsg} </Typography>
        </>
    )
}