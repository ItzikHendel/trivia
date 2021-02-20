import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Summary({ summaryData }) {
    console.log("=========");
    console.log(summaryData);

    const correctAnswersNum = summaryData.reduce((total, current) =>  current.isCorrect ? total + 1 : total, 0);

    return (
        <Container>
            <Typography variant="h1">
                <Box display="flex" justifyContent="center">
                    <Box component="span" color="white" bgcolor="palevioletred" borderRadius={60} p={1} m={5}>{correctAnswersNum}/{summaryData.length}</Box>
                </Box>
            </Typography>
        </Container>

    )
}