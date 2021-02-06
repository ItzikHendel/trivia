import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const answerBgColors = {
    enabled: "text.secondary",
    disabled: "text.disabled",
    correct: "success.main",
    wrong: "error.main"
}

const Quiz = React.memo(({ question, shuffledAnswers, correctAnswer, onAnswerSelected }) => {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    useEffect(() => {
        setSelectedAnswerIndex(null);
    }, [question]);

    const answerRow = (answer, index) => {
        let backgroundColor = answerBgColors.enabled;
        if (selectedAnswerIndex !== null) {
            if (selectedAnswerIndex === index) {
                backgroundColor = answer === correctAnswer ? answerBgColors.correct : answerBgColors.wrong;
            } else {
                backgroundColor = answerBgColors.disabled;
            }
        }

        return <Box
            key={index}
            bgcolor={backgroundColor}
            color="background.paper"
            m={2}
            p={2}
            onClick={() => {
                if (selectedAnswerIndex === null) {
                    onAnswerSelected(answer);
                    setSelectedAnswerIndex(index);
                }
            }}>
            {answer}
        </Box>;
    }

    return (
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', padding: '2px', marginBottom: '10px' }}  >
            <Box bgcolor="primary.main" color="primary.contrastText" p={2}>{question}</Box>
            {shuffledAnswers.map((answer, index) => answerRow(answer, index))}
        </Typography>
    );
});

export default Quiz;