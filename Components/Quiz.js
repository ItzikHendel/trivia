import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { shuffle } from 'underscore';

export default function Quiz({ quizData }) {
    const { question, answers } = quizData;
    const handleAnswerSelected = (answer) => console.log("isCorrect: ", answer === quizData.answers[0]);

    const answerRow = (answer) => <Box key={answer} bgcolor="text.disabled" color="background.paper" m={2} p={2} onClick={() => handleAnswerSelected(answer)}>{answer}</Box>;

    return (
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', gutterBottom:'true' }} >
            <Box bgcolor="primary.main" color="primary.contrastText" p={2}>{quizData.question}</Box>
            {shuffle(quizData.answers).map((answer) => answerRow(answer))}
        </Typography>
    );
}