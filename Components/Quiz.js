import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { shuffle } from 'underscore';

export default function Quiz({ quizData }) {
    const { question, answers } = quizData;
    const handleAnswerSelected = (answer) => console.log("isCorrect: ", answer === quizData.answers[0]);

    return (
        <Container>
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
                <Box bgcolor="primary.main" color="primary.contrastText" p={2}>{quizData.question}</Box>
                {shuffle(quizData.answers).map((answer) =>
                    <Box key={answer} bgcolor="text.disabled" color="background.paper" m={2} p={2} onClick={() => handleAnswerSelected(answer)}>
                        {answer}
                    </Box>)}
            </Typography>
        </Container>
    );
}