import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { shuffle } from 'underscore';

const Quiz = React.memo(({ question, answers, handleAnswerSelected }) => {
    const answerRow = (answer) => <Box key={answer} bgcolor="text.disabled" color="background.paper" m={2} p={2} onClick={() => handleAnswerSelected(answer)}>{answer}</Box>;

    return (
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', padding: '2px' }}  >
            <Box bgcolor="primary.main" color="primary.contrastText" p={2}>{question}</Box>
            {shuffle(answers).map((answer) => answerRow(answer))}
        </Typography>
    );
});

export default Quiz;