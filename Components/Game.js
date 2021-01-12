import React, { useState, useCallback } from 'react';
import Container from '@material-ui/core/Container';

import Quiz from './Quiz';
import Result from './Result';

export default function Game({ quizData }) {
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const { question, answers, quote, source, link } = quizData;
    const handleAnswerSelected = useCallback((answer) => {
        setIsAnswerCorrect(answer === answers[0]);
    }, []);
    return (
        <Container>
            <Quiz question={question} answers={answers} handleAnswerSelected={handleAnswerSelected} />
            <Result isAnswerCorrect={isAnswerCorrect} correctAnswer={answers[0]} quote={quote} source={source} link={link} />
        </Container>
    );
};