import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import MobileStepper from '@material-ui/core/MobileStepper';
//import Button from '@material-ui/core/Button';
//import Icon from '@material-ui/core/Icon';

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
        actionButton = <ActionButton text="Summary" color="secondary" icon="list_alt" onClick={goToSummary} />
    }

    /*const stepperNextButton =
        <Button size="small" onClick={onNextClick} disabled={isAnswerCorrect === null || quizIndex + 1 === quizDataArray.length}>
            Next <Icon>{"keyboard_arrow_right"}</Icon>
        </Button>;*/

    return (
        <Container>
            <Quiz
                question={question}
                correctAnswer={answers[0]}
                shuffledAnswers={shuffledAnswers}
                handleAnswerSelected={setIsAnswerCorrect} />

            <MobileStepper
                variant="dots"
                steps={quizDataArray.length}
                position="static"
                activeStep={quizIndex}
                style={{ justifyContent: 'center' }}
            //nextButton={stepperNextButton}
            />

            <Result
                isAnswerCorrect={isAnswerCorrect}
                correctAnswer={answers[0]} quote={quote}
                source={source}
                link={link} />

            {actionButton}

        </Container>
    );
};