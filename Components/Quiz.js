import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Quiz = React.memo(({ question, correctAnswer, shuffledAnswers, handleAnswerSelected }) => {
    const answerRow = (answer) =>
        <Box key={answer} bgcolor="text.disabled" color="background.paper" m={2} p={2} onClick={() => handleAnswerSelected(answer === correctAnswer)}>
            {answer}
        </Box>;

    return (
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', padding: '2px', marginBottom: '10px' }}  >
            <Box bgcolor="primary.main" color="primary.contrastText" p={2}>{question}</Box>
            {shuffledAnswers.map((answer) => answerRow(answer))}
        </Typography>
    );
});

export default Quiz;