import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import MobileStepper from '@material-ui/core/MobileStepper';
//import Button from '@material-ui/core/Button';
//import Icon from '@material-ui/core/Icon';

import { shuffle } from 'underscore';

import Quiz from './Quiz';
import Result from './Result';
import ActionButton from './ActionButton';

let gameData = [];

export default function Game({ quizDataArray, goToSummary }) {
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [quizIndex, setQuizIndex] = useState(0);

    useEffect(() => {
        !shuffledAnswers.length && setShuffledAnswers(shuffle(answers));
    }, [shuffledAnswers, quizDataArray]);

    const { question, answers, quote, source, link } = quizDataArray[quizIndex];
    let actionButton;

    const onNextClick = () => {
        setIsAnswerCorrect(null);
        setQuizIndex(quizIndex + 1);
        setShuffledAnswers([]);
    };

    const onAnswerSelected = (answer) => {
        let isCorrect = answer === answers[0];
        setIsAnswerCorrect(isCorrect);
        gameData.push({
            userAnswer: answer,
            isCorrect
        });
    }

    const onEnterPress = () => {
        if (quizIndex + 1 < quizDataArray.length) {
            onNextClick();
        } else {
            goToSummary(gameData);
        }
    };

    if (isAnswerCorrect === null) {
        actionButton = null;
    } else if (quizIndex + 1 < quizDataArray.length) {
        actionButton = <ActionButton text="Next" icon="skip_next" onClick={onNextClick} />
    } else {
        actionButton = <ActionButton text="Summary" color="secondary" icon="list_alt" onClick={() => goToSummary(gameData)} />
    }

    /*const stepperNextButton =
        <Button size="small" onClick={onNextClick} disabled={isAnswerCorrect === null || quizIndex + 1 === quizDataArray.length}>
            Next <Icon>{"keyboard_arrow_right"}</Icon>
        </Button>;*/

    return (
        <Container>
            <Quiz
                question={question}
                shuffledAnswers={shuffledAnswers}
                correctAnswer={answers[0]}
                onAnswerSelected={onAnswerSelected}
                onEnterPress={onEnterPress} />

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
                correctAnswer={answers[0]}
                quote={quote}
                source={source}
                link={link} />

            {actionButton}

        </Container>
    );
};