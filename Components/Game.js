import React, { useState, useCallback } from 'react';
import Container from '@material-ui/core/Container';

import Quiz from './Quiz';
import Result from './Result';

export default function Game({ quizData }) {
    const [answerStatus, setAnswerStatus] = useState('notSelected');
    const { question, answers } = quizData;
    const handleAnswerSelected = useCallback((answer) => {
        setAnswerStatus(answer === answers[0] ? 'correct' : 'wrong');
    }, []);
    return (
        <Container>
            <Quiz question={question} answers={answers} handleAnswerSelected={handleAnswerSelected} />
            <Result answerStatus={answerStatus} />
        </Container>
    );
};