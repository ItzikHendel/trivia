import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { shuffle } from 'underscore';

import Quiz from './Quiz';
import Result from './Result';
import ActionButton from './ActionButton';

let shuffledAnswers;

export default function Game({ quizDataArray, goToSummary }) {
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

    let actionButton;
    
    if (isAnswerCorrect === null) {
        actionButton = null;
    } else if (quizIndex + 1 < quizDataArray.length) {
        actionButton = <ActionButton text="Next" icon="skip_next" onClick={onNextClick} />
    } else {
        actionButton = <ActionButton text="Summary" color="secondary" icon="list_alt" onClick={() => console.log("==== Summary clicked! ")} />
    }
    
    return (
        <Container>
            <Quiz question={question} correctAnswer={answers[0]} shuffledAnswers={shuffledAnswers} handleAnswerSelected={setIsAnswerCorrect} />
            <Result isAnswerCorrect={isAnswerCorrect} correctAnswer={answers[0]} quote={quote} source={source} link={link} />
            { actionButton }
        </Container>
    );
};