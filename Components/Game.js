import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { shuffle } from 'underscore';

import Quiz from './Quiz';
import Result from './Result';
import Next from './Next';

let shuffledAnswers;

export default function Game({ quizDataArray }) {
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [quizIndex, setQuizIndex] = useState(0);

    const { question, answers, quote, source, link } = quizDataArray[quizIndex];
    if (!shuffledAnswers) {
        shuffledAnswers = shuffle(answers);
    }


    const onNextClick = () => {        
        setIsAnswerCorrect(null);
        setQuizIndex(quizIndex + 1);
        shuffledAnswers = null;
    };

    return (
        <Container>
            <Quiz question={question} correctAnswer={answers[0]} shuffledAnswers={shuffledAnswers} handleAnswerSelected={setIsAnswerCorrect} />
            <Result isAnswerCorrect={isAnswerCorrect} correctAnswer={answers[0]} quote={quote} source={source} link={link} />
            { (isAnswerCorrect !== null && quizIndex + 1 < quizDataArray.length) ? <Next onNextClick={onNextClick} /> : null}
        </Container>
    );
};