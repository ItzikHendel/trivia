import React, { useState, useCallback } from 'react';
import Container from '@material-ui/core/Container';

import Quiz from './Quiz';
import Result from './Result';
import Next from './Next';

export default function Game({ quizDataArray }) {
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [quizIndex, setQuizIndex] = useState(0);

    const { question, answers, quote, source, link } = quizDataArray[quizIndex];

    const onNextClick = () => {        
        setIsAnswerCorrect(null);
        setQuizIndex(quizIndex + 1);
    };

    return (
        <Container>
            <Quiz question={question} answers={answers} handleAnswerSelected={setIsAnswerCorrect} />
            <Result isAnswerCorrect={isAnswerCorrect} correctAnswer={answers[0]} quote={quote} source={source} link={link} />
            { (isAnswerCorrect !== null && quizIndex + 1 < quizDataArray.length) ? <Next onNextClick={onNextClick} /> : null}
        </Container>
    );
};