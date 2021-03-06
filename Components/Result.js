import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

export default function Result({ isAnswerCorrect, correctAnswer, quote, source, link }) {
    if (isAnswerCorrect === null)
        return null;
    const correctAnswerMsg = (<>
        <Box color="success.main" boxShadow={3} p={2} m={2}><b>{correctAnswer}</b></Box>
    </>);
    return (
        <>
            <Typography component="div" variant="h6" style={{ backgroundColor: '' }} > {isAnswerCorrect ? "" : correctAnswerMsg} </Typography>
            <Box color="text.primary" boxShadow={3} p={2} m={2}>
                <i>"{quote}"</i>
                <br />
                  From <Link href={link} target="_blank" rel="noopener noreferrer">{source}</Link>
            </Box>
        </>
    )
}