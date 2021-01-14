import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Quiz = React.memo(({ question, shuffledAnswers, onAnswerSelected }) => {
    const [isAnswerSelected, setIsAnswerSelected] = useState(false);

    useEffect(() => setIsAnswerSelected(false), [question]);

    const answerRow = (answer) =>
        <Box
            key={answer}
            bgcolor={isAnswerSelected ? "text.disabled" : "text.secondary"}
            color="background.paper"
            m={2}
            p={2}
            onClick={() => {
                if (!isAnswerSelected) {
                    setIsAnswerSelected(true);
                    onAnswerSelected(answer);
                }
            }}>
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