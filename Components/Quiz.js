import React, { useEffect, useState } from 'react';
import styles from '../styles/Quiz.module.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const answerBgColors = {
    enabled: "text.secondary",
    disabled: "text.disabled",
    correct: "success.main",
    wrong: "error.main"
}

const Quiz = React.memo(({ question, shuffledAnswers, correctAnswer, onAnswerSelected, onEnterPress }) => {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    useEffect(() => {
        setSelectedAnswerIndex(null);
    }, [question]);

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
        }
    }, [selectedAnswerIndex])

    const onKeyDown = (event) => {
        if (event.key === "Enter" && selectedAnswerIndex !== null) {
            onEnterPress();
        }
    }

    const answerRow = (answer, index) => {
        let answerClassName = styles.answer;
        let isAnswerDisable = false;
        if (selectedAnswerIndex !== null) {
            isAnswerDisable = true;
            if (selectedAnswerIndex === index) {
                answerClassName = answer === correctAnswer ? `${styles.answer} ${styles.correct}` : `${styles.answer} ${styles.wrong}`;
            }
        }

        return (
            <button
                key={index}
                className={answerClassName}
                disabled={isAnswerDisable}
                onClick={() => {
                    if (selectedAnswerIndex === null) {
                        onAnswerSelected(answer);
                        setSelectedAnswerIndex(index);
                    }
                }}> {answer} </button>
        )
    }

    return (
        <Typography component="div" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'GhostWhite', padding: '2px', marginBottom: '10px' }}  >
            <Box bgcolor="primary.main" color="primary.contrastText" p={2}>{question}</Box>
            {shuffledAnswers.map((answer, index) => answerRow(answer, index))}
        </Typography>
    );
});

export default Quiz;