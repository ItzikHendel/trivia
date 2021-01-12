import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

export default function Result({ isAnswerCorrect, correctAnswer, quote, source, link }) {
    console.log(source);
    console.log(link);
    if (isAnswerCorrect === null)
        return null;
    const correctAnswerMsg = <Box bgcolor="success.main" color="success.contrastText" p={2} mb={2}>Correct!</Box>;
    const wrongAnswerMsg = (<>
        <Box bgcolor="error.main" color="error.contrastText" p={2} mb={2}>Wrong!</Box>
        <Box color="primary.main" boxShadow={1} mb={2}>The correct answer is: <b>{correctAnswer}</b></Box>
    </>);
    return (
        <>
            <Typography component="div" variant="h6" style={{ backgroundColor: '' }} > {isAnswerCorrect ? correctAnswerMsg : wrongAnswerMsg} </Typography>
            <Box color="text.primary" boxShadow={3} p={2}>
                <i>"{quote}"</i>
                <br/>
                From <Link href={link} target="_blank">{source}</Link>
            </Box>
        </>
    )
}